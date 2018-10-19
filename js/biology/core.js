(function (global, factory) {
	"use strict";

	if (typeof module === "object" && typeof module.exports === "object") {
		module.exports = factory(global, true);

	} else
		factory(global);

})(typeof window !== "undefined" ? window : this, function (global, noGlobal) {
	"use strict";

	// Private

	let $ = global.$;

	let config = {
		naming: {
			symptom: {
				list: 'symptoms',
				entity: 'symptom'
			},
			pathology: {
				list: 'pathologies',
				entity: 'pathology'
			},
			diagnosis: {
				list: 'diagnostics',
				entity: 'diagnosis'
			},
			searchSuffix: '-search',
			entrySuffix: '-entry',
			listSuffix: '-list',
			active: 'active',
			selected: 'selected'
		},
		path: {}
	}, data = {
		symptoms: [],
		pathologies: [],
		diagnostics: [],
		selected: {
			entities: [],
			diagnostics: []
		},
		active: {
			entities: [],
			diagnostics: []
		}
	};

	function load(symptoms, pathologies, diagnostics) {
		data.symptoms = symptoms;
		data.pathologies = pathologies;
		data.diagnostics = diagnostics;

		linkEntities(config.naming.diagnosis.list, config.naming.symptom.list, 'Síntoma');
		linkEntities(config.naming.diagnosis.list, config.naming.pathology.list, 'Patología');
	}

	function init(baseName) {
		config.naming.base = baseName;
		config.naming.entryCommon = config.naming.base + config.naming.entrySuffix;
		config.path.search = '.' + config.naming.base + config.naming.searchSuffix;
		config.path.list = '.' + config.naming.base + config.naming.listSuffix;
		config.path.prefix = '.' + config.naming.base + '-';

		config.path.symptom = config.path.prefix + config.naming.symptom.list;
		config.path.pathology = config.path.prefix + config.naming.pathology.list;
		config.path.diagnosis = config.path.prefix + config.naming.diagnosis.list;

		buildEntries(config.naming.symptom.entity, config.naming.symptom.list, data.symptoms);
		buildEntries(config.naming.pathology.entity, config.naming.pathology.list, data.pathologies);
		buildEntries(config.naming.diagnosis.entity, config.naming.diagnosis.list, data.diagnostics);

		initEntryHandlers('.' + config.naming.entryCommon);

		initSearchHandler(config.path.symptom, data.symptoms);
		initSearchHandler(config.path.pathology, data.pathologies);
		initSearchHandler(config.path.diagnosis, data.diagnostics);
	}

	// Public

	let biology = $.extend({ config }, {
		load: load,
		init: init,
	});


	// Private

	// link/replace data entities over array ids
	function linkEntities(baseEntity, childEntity, notFoundEntityName) {
		data[baseEntity].forEach(entity => {
			entity[childEntity].forEach((value, index) => {

				let filtered = data[childEntity].filter(ent => ent.id === value);

				if (!filtered.length) {
					alert(notFoundEntityName + ' con id ' + value + ' no encontrado');
				} else {
					if (filtered.length > 1) {
						alert('El id ' + ent.id + ' se ha asignado a ' + filtered.length + ' ' + notFoundEntityName + '.\nSe tomará el primero encontrado')
					}

					filtered[0][baseEntity] = filtered[0][baseEntity] || [];
					// add diagnosis to sypmtom
					filtered[0][baseEntity].push(entity);
					entity[childEntity][index] = filtered[0];
				}
			});
		});
	}

	// build dom elements and linked data
	function buildEntries(entryName, listName, elements) {
		let entryClass = entryName + config.naming.entrySuffix,
			containerExpr = config.path.prefix + listName + ' > ' + config.path.list;

		elements.forEach(element => {
			let entry = $("<div>");

			entry.addClass(entryClass).addClass(config.naming.entryCommon);
			entry.attr("id", entryName + element.id);
			entry.text(element.name);
			entry.data("entity", element);

			// cross link data with dom
			element.domElement = entry;

			$(containerExpr).append(entry);
		});
	}


	// clicking on entry
	function initEntryHandlers(entriesExpr) {
		let ignoreExpr = '.' + config.naming.base + '-ignore-click';

		$(':not(' + ignoreExpr + ') > ' + entriesExpr).on("click", function (e) {
			let entry = $(e.currentTarget);

			if (e.type === "click") {
				let entity = entry.data("entity");

				if (entity.active) {
					entity.active = false;

					unselect(entity);
				} else {
					select(entity);

					entity.active = true;
				}
			}
		});
	}

	// selecting an item
	function select(entity) {
		// select symptom or pathology
		if (entity.diagnostics) {
			emptyCacheList(data.selected.entities, config.naming.selected);
			emptyCacheList(data.active.diagnostics, config.naming.active);

			propagateSelect(entity.diagnostics, data.selected.diagnostics);

			data.active.entities.push(entity);

			entity.domElement.addClass(config.naming.active);
		}
		// select diagnosis
		else if (entity.symptoms || entity.pathologies) {
			emptyCacheList(data.selected.diagnostics);
			emptyCacheList(data.selected.entities);
			emptyCacheList(data.active.entities, config.naming.active);
			emptyCacheList(data.active.diagnostics, config.naming.active);

			propagateSelect(entity.symptoms);
			propagateSelect(entity.pathologies);

			data.active.diagnostics.push(entity);

			entity.domElement.addClass(config.naming.active);

			$('.' + config.naming.entryCommon).not('.' + config.naming.selected).not('.' + config.naming.diagnosis.entity + config.naming.entrySuffix).stop().hide();
		}

	}

	// unselecting an item
	function unselect(entity) {
		entity.domElement.removeClass(config.naming.active);

		if (entity.diagnostics) {
			propagateUnselect(entity.diagnostics, data.selected.diagnostics);

			data.active.entities.splice(data.active.entities.findIndex(o => { o.id === entity.id }), 1);
		}
		else if (entity.symptoms || entity.pathologies) {
			propagateUnselect(entity.symptoms);
			propagateUnselect(entity.pathologies);

			data.active.diagnostics.splice(data.active.diagnostics.findIndex(o => { o.id === entity.id }), 1);

			if (data.active.diagnostics.length === 0) {
				$('.' + config.naming.entryCommon + ':hidden').fadeIn(400);
			}
		}
	}

	// unselecting an item propagation
	function propagateUnselect(entityList, selectionList) {
		entityList.forEach(entity => {
			entity.count--;

			if (!entity.count) {

				selectionList = selectionList || data.selected.entities;
				selectionList.splice(selectionList.findIndex(o => { o.id === entity.id }), 1);

				entity.active = false;
				entity.domElement.removeClass(config.naming.selected);
			}
		});
	}

	// selecting an item in a list
	function propagateSelect(entityList, selectionList) {
		entityList.forEach(entity => {
			entity.count = entity.count || 0;
			entity.count++;

			if (entity.count === 1) {
				selectionList = selectionList || data.selected.entities;
				selectionList.push(entity);

				entity.domElement.addClass(config.naming.selected);
			}
		});
	}

	// empty selected entities cache
	function emptyCacheList(list, selectedClass) {
		let entity;
		do {
			entity = list.pop();

			if (entity != null) {
				entity.domElement.removeClass(selectedClass || config.naming.selected).removeClass(config.naming.selected);
				entity.active = false;
				entity.count = 0;
			}
		} while (entity);

		$('.' + config.naming.entryCommon + ':hidden').fadeIn(400);
	}

	// type over search input
	function initSearchHandler(entityExpr) {
		let searchBoxExpr = entityExpr + ' > ' + config.path.search,
			searchBox = $(searchBoxExpr),
			entity = $(entityExpr + ' > ' + config.path.list);

		searchBox.on("input", function () {
			let searchTerm = searchBox.val().toLowerCase().trim();

			let items = entity.children();

			items.each(function () {
				let item = $(this);

				var text = item.text().toLowerCase();

				if (text.indexOf(searchTerm) !== -1) {
					item.fadeIn(400);
				} else
					item.stop().hide();

				if (searchBox.val() == '') {
					item.show();
				}
			});
		});
	}

	// Expose identifier, even in AMD and CommonJS for browser emulators
	if (!noGlobal) {
		window.biology = biology;
	}

	return biology;
});
