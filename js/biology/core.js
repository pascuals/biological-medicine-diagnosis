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
			listSuffix: '-list'
		},
		path: {}
	};

	// Public

	let biology = $.extend({ config }, {
		data: function (symptoms, pathologies, diagnostics) {
			this.symptoms = symptoms;
			this.pathologies = pathologies;
			this.diagnostics = diagnostics;
		},

		init: function (baseClass) {
			config.naming.base = baseClass;
			config.naming.entryCommon = config.naming.base + config.naming.entrySuffix;
			config.path.search = '.' + config.naming.base + config.naming.searchSuffix;
			config.path.list = '.' + config.naming.base + config.naming.listSuffix;
			config.path.prefix = '.' + config.naming.base + '-';

			config.path.symptom = config.path.prefix + config.naming.symptom.list;
			config.path.pathology = config.path.prefix + config.naming.pathology.list;
			config.path.diagnosis = config.path.prefix + config.naming.diagnosis.list;

			buildEntries(config.naming.symptom.entity, config.naming.symptom.list, this.symptoms);
			buildEntries(config.naming.pathology.entity, config.naming.pathology.list, this.pathologies);
			buildEntries(config.naming.diagnosis.entity, config.naming.diagnosis.list, this.diagnostics);

			initEntryHandlers('.' + config.naming.entryCommon);

			searchBox(config.path.symptom, this.symptoms);
			searchBox(config.path.pathology, this.pathologies);
			searchBox(config.path.diagnosis, this.diagnostics);
		},
	});


	// Private

	function buildEntries(entryName, listName, elements) {
		let entryClass = entryName + config.naming.entrySuffix,
			containerExpr = config.path.prefix + listName + ' > ' + config.path.list;

		elements.forEach(element => {
			let entry = $("<div>");

			entry.addClass(entryClass).addClass(config.naming.entryCommon);
			entry.attr("id", entryName + element.id);
			entry.text(element.name);

			Object.keys(element).forEach(key => {
				entry.data(key, element[key]);
			});

			$(containerExpr).append(entry);
		});
	}

	function initEntryHandlers(entriesExpr) {
		$(entriesExpr).on("click", function (e) {
			let entry = $(e.currentTarget),
				id = entry.attr("id");

			if (e.type === "click") {
				if (entry.hasClass("active"))
					entry.removeClass("active");
				else
					entry.addClass("active");
			}
		});
	}

	function searchBox(entityExpr) {
		let searchBoxExpr = entityExpr + ' > ' + config.path.search,
			searchBox = $(searchBoxExpr),
			entity = $(entityExpr + ' > ' + config.path.list);

		// search function
		searchBox.on("input", function () {
			let searchTerm = searchBox.val().toLowerCase().trim();

			let items = entity.children();

			items.each(function () {
				let item = $(this);

				var text = item.text().toLowerCase();

				if (text.indexOf(searchTerm) !== -1) {
					item.fadeIn(400);
				} else
					item.hide();

				if (searchBox.val() == '') {
					item.show();
				}
			});
		});
	}

	// Expose identifier, even in AMD
	// and CommonJS for browser emulators (#13566)
	if (!noGlobal) {
		window.biology = biology;
	}

	return biology;
});
