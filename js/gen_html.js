function createCheckbox(type, name, label) {
	var html = '<div class="form-check">' +
			'<input id="' + type + '-' + name + '" type="checkbox" name="' + type + '-' + name + '" class="form-check-input">' +
			'<label id="label-' + name + '" for="' + type + '-' + name + '" class="form-check-label">' + label + '</label>' +
			'</div>';
	
	return html;
}

function createSection(section_name, section_type, json, resource, is_hidden, css) {
	var html = '';

	html += '<div class="' + css + '">' +
			'<div>' + section_name + ':</div>';

	var arr = Object.values(json);
	var res = Object.values(resource);
	
	if(section_type == cat_str.CHARACTERS) {
		html += createCheckbox('select', 'all', 'ALL')
	}
	
	for(var i=0; i < arr.length; i++) {
		html += createCheckbox(section_type, arr[i], res[i]);
	}

	html += '</div>';

	return html;
}