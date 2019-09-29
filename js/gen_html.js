function createCheckbox(type, name, label) {
	var html = '<div class="form-check">' +
			'<input id="' + type + '-' + name + '" type="checkbox" name="' + type + '-' + name + '" class="form-check-input">' +
			'<label id="label-' + name + '" for="' + type + '-' + name + '" class="form-check-label">' + label + '</label>' +
			'</div>';
	
	return html;
}

function createSection(section_name, section_type, json, css) {
	var html = '';

	html += '<div class="' + css + '">' +
			'<div>' + section_name + ':</div>';

	var arr = Object.values(json);
	
	for(var i=0; i < arr.length; i++) {
		html += createCheckbox(section_type, arr[i], arr[i]);
	}

	html += '</div>';

	return html;
}