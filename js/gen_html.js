function createCheckbox(type, name, label) {
	var html = '<div class="form-check group-' + name + '">' +
			'<input id="' + type + '-' + name + '" type="checkbox" name="' + type + '-' + name + '" class="form-check-input">' +
			'<label id="label-' + name + '" for="' + type + '-' + name + '" class="form-check-label">' + label + '</label>' +
			'</div>';
	
	return html;
}

function createSection(section_name, section_type, json, css) {
	var html = '<div class="' + css + '">';

	html += section_name ?  '<div class="section-name font-weight-bold">' + section_name + '</div>' : '';

	var arr = Object.values(json);
	
	if(section_type == cat_str.CHARACTERS) {
		html += createCheckbox('select', 'all', getTranslation(['main', 'all']).toUpperCase())
	}
	
	for(var i=0; i < arr.length; i++) {
		switch (section_type) {
			case cat_str.CHARACTERS:
				html += createCheckbox(section_type, arr[i], getTranslation(['characters', arr[i]]));
				break;
			case cat_str.CLASSES:
				html += createCheckbox(section_type, arr[i], getTranslation(['careers', arr[i]]));
				break;
			case cat_str.WPN_MELEE:
				html += createCheckbox(section_type, arr[i], getTranslation(['weapons_melee', arr[i]]));
				break;
			case cat_str.WPN_RANGED:
				html += createCheckbox(section_type, arr[i], getTranslation(['weapons_ranged', arr[i]]));
				break;
			case 'options':
				html += createCheckbox(section_type, arr[i], getTranslation(['settings', 'dlc', arr[i]]));
				break;
		}
	}

	html += '</div>';

	return html;
}

function createListImageElement(item) {
	return '<li id="' + item + '"><img src=\"assets/roulette/' + item + '.png"/></li>';
}
