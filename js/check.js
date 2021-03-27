//get last update date from github
//TODO: make cleaner?
async function getLastUpdateDate() {
	var url = 'https://api.github.com/repos/bluehardt/v2-draw-your-loadout/branches/master';
	
	const resp = await $.get(url);
	
	var last_update = new Date(resp.commit.commit.author.date);
	last_update = last_update.toLocaleString('en-GB');
	
	var repo_url = resp._links.html;
	
	var git_img = '<svg class="mb-1" height="17" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>';
	
	return '<span class="tip"><a href="' + repo_url + '">' + git_img + '</a>' + last_update + '<span>' + resp.commit.commit.message + '</span></span>';
};

//random integer (0 - max-1)
function rand(max) {
	var min = 0;
	return Math.floor(Math.random() * (max - min)) + min;
};

function loadDLCStore(name, weapons, career) {
	var arr = Object.values(weapons);
	var opt = $('#options-' + name)[0];
	opt.checked = JSON.parse(localStorage.getItem('toggle-' + name));
	
	if (opt.checked) {
		for(var j=0; j < arr.length; j++) {
			var input = $('[id*=' + arr[j] + ']');
			input.prop('disabled', opt.checked);
			input.prop('checked', false);
		}

		if (career) {
			var input = $('[id*=' + career + ']');
			input.prop('disabled', opt.checked);
			input.prop('checked', false);
		}
	}
};

//toggle all inputs
function toggleAll() {
	$('#select-all').click(function(event) {
		var state = $(this).is(':checked');
		setAll(cat_str, state);
	});
};

function hideAll() {
	var names = Object.values(ch_str);

	// pushing each checkbox's id which is currently checked
	names.forEach(name => {
		$('[class*=group-' + name + '-]').each(function() {
			$(this).hide();
		});
	});
}

function setAll(json, state) {
	var names = Object.values(ch_str);

	names.forEach(name => {
		$('.group-' + name + ' input').prop('checked', state);
		$('[class*=group-' + name + '-]').each(function() {
			state ? $(this).show() : $(this).hide();

			if (!$(this).children('input').prop('disabled')) {
				$(this).children('input').prop('checked', state);
			}
		});
	});
};

//toggle all subclasses and weapons for a chosen character
function toggleHeroRelated(name) {
	$('#chars-' + name).click(function(event) {
		var $hero = $(this);

		// hiding/showing labels and checkboxes
		if (!$hero.is(':checked')) {
			$('[class*=group-' + name + '-]').each(function() {
				$(this).hide();
			});

			// uncheck 'ALL'
			$('#select-all').prop('checked', false);
		} else {
			$('[class*=group-' + name + '-]').each(function() {
				$(this).show();
			});
		}

		// checking logic
		$('[id*=' + name + ']').each(function() {
			if (!this.disabled) {
				this.checked = $hero.is(':checked');
			}
		});
	});
};

function toggleDLC(name, weapons, career) {
	$('#options-' + name).click(function(event) {
		for(var i=0; i < weapons.length; i++) {
			var input = $('[id*=' + weapons[i] + ']');
			input.prop('disabled', $(this).is(':checked'));
			input.prop('checked', !$(this).is(':checked'));
		}

		if (career) {
			var input = $('[id*=' + career + ']');
			input.prop('disabled', $(this).is(':checked'));
			input.prop('checked', !$(this).is(':checked'));
		}
		
		localStorage.setItem('toggle-' + name, $(this).is(':checked'));
	});
};

function toggleOptions(name) {
	$('#options-' + name).click(function(event) {
		localStorage.setItem('toggle-' + name, $(this).is(':checked'));
	});
};

function loadOptions(name) {
	var opt = $('#options-' + name)[0];
	opt.checked = localStorage.getItem('toggle-' + name) === null ? true : JSON.parse(localStorage.getItem('toggle-' + name));
};

/*
	Save picked checkboxes into local storage
*/ 
function savePreset() {
	var names = Object.values(ch_str);
	var presetData = [];

	// pushing each checkbox's id which is currently checked
	names.forEach(name => {
		$('[class*=' + name + '] input').each(function() {
			if ($(this)[0].checked) {
				presetData.push($(this)[0].id);
			}
		});
	});

	var stringifiedPreset = JSON.stringify(presetData);	

	localStorage.setItem('preset', stringifiedPreset);

	$('.alert').hide();
	$('#alert-preset-save').show();
};

/*
	Load preset from local storage
*/
function loadPreset() {
	var preset = localStorage.getItem('preset');

	if (preset) {
		preset = JSON.parse(preset);


		var names = preset.filter(el => el.includes('chars-'));
		names.forEach((name, index) => {
			names[index] = name.replace('chars-', '');
		});

		hideAll();

		// checking boxes loaded from local storage
		names.forEach(name => {
			if (Object.values(ch_str).find(el => name.includes(el))) {
				$('[class*=group-' + name + '-]').show();
			}

			preset.forEach(item => {
				$('[id*=' + item + ']').prop('checked', true);
			})
		});
	} else {
		$('#select-all').prop('checked', true);
		setAll(cat_str, true);
	}
};

/*
	Delete preset from local storage
*/
function deletePreset() {
	localStorage.removeItem('preset');

	$('.alert').hide();
	$('#alert-preset-clear').show();
};

function disableCareer(name, cls) {
	$('#options-' + name).click(function(event) {
		var input = $('[id*=' + cls + ']');
		input.prop('disabled', $(this).is(':checked'));
		input.prop('checked', false);
	});
};

results = [null, null, null];
resultsTranslation = [null, null, null];
resultError = '';

//draw loadout
function drawLoadout() {
	$('.results-text').removeClass('opacity-1');

	resultError = null;

	chars_arr = [];
	cls_arr = [];
	wpnm_arr = [];
	wpnr_arr = [];
	
	//get array of checked heroes
	$('input[id*=' + cat_str.CHARACTERS + ']:checked').each(function() {
		chars_arr.push($(this).attr('id'));
	});
	//TODO: default array in case intial one is empty!
	
	//draw hero
	rand_ch = chars_arr[rand(chars_arr.length)];
	
	if(rand_ch === undefined) return displayResultsText('#output-text', 'Pick at least 1 hero!');
	
	rand_ch_name = rand_ch.substring(rand_ch.indexOf('-') + 1);
	
	//get array of checked hero's classes
	$('input[id*=' + cat_str.CLASSES + '-' + rand_ch_name + ']:checked').each(function() {
		cls_arr.push($(this).attr('id'));
	});
	//TODO: default array in case intial one is empty!
	
	//draw class
	rand_cls = cls_arr[rand(cls_arr.length)];
	
	if(rand_cls === undefined) return displayResultsText('#output-text', 'Pick at least 1 career per chosen hero!');
	
	rand_cls_name = rand_cls.substring(rand_cls.indexOf('-') + 1);
	rand_cls_num = rand_cls.substring(rand_cls.lastIndexOf('-') + 1);
	
	//get array of checked melee weapons for randomed career which can be used by it
	$('input[id*=' + cat_str.WPN_MELEE + '-' + rand_ch_name + ']:checked').each(function() {
		var id = $(this).attr('id');
		if(id.substring(id.lastIndexOf('-') + 1).includes(rand_cls_num)) {
			wpnm_arr.push(id);
		};
	});
	//TODO: default array in case initial one is empty!
	
	//draw weapon
	rand_wpnm = wpnm_arr[rand(wpnm_arr.length)];
	
	if(rand_wpnm === undefined) return displayResultsText('#output-text', 'Pick at least 1 melee weapon per chosen hero! (or a class tied weapon)');
	
	rand_wpnm_name = rand_wpnm.substring(rand_wpnm.indexOf('-') + 1);
	
	//in case of bardin slayer he can also equip melee weapons in 2nd slot (same goes for resources)
	if(rand_cls.includes(cls_str.BARDIN_SLR) || rand_cls.includes(cls_str.KRUBER_GK)) {
		wpnr_arr = wpnm_arr.concat();
		res_wpnr = Object.assign({}, res_wpnm, res_wpnr);
	}
	//get array of checked ranged weapons for randomed class which can be used by it
	$('input[id*=' + cat_str.WPN_RANGED + '-' + rand_ch_name + ']:checked').each(function() {
		var id = $(this).attr('id');
		if(id.substring(id.lastIndexOf('-') + 1).includes(rand_cls_num)) {
			wpnr_arr.push(id);
		};
	});
	//TODO: default array in case initial one is empty!
	
	//draw weapon
	rand_wpnr = wpnr_arr[rand(wpnr_arr.length)];
	
	if(rand_wpnr === undefined) return displayResultsText('#output-text', 'Pick at least 1 ranged weapon per chosen hero! (or a class tied weapon)');
	
	rand_wpnr_name = rand_wpnr.substring(rand_wpnr.indexOf('-') + 1);
	
	// results and displaying
	results = [
		rand_cls_name,
		rand_wpnm_name,
		rand_wpnr_name
	]

	resultsTranslation = [
		res_cls[rand_cls_name],
		res_wpnm[rand_wpnm_name],
		res_wpnr[rand_wpnr_name]
	]

	var rouletteEnabled = $('#options-enable-roulette')[0].checked;

	if (rouletteEnabled) {
		displayResultsText('#output-text', `
			<span class="output-placeholder font-weight-normal">
				<em>Click me!</em>
			</span>
		`);

		drawRoulette();
		$('#rouletteModal').modal('show');
	} else {
		displayResultsText('#output-text');
	}
}

function displayResultsText(target, message) {
	var displayResults = '';

	if (!message) {
		
		if (window.innerWidth > 576 && target !== '.results-text') {
			resultsTranslation.forEach((val, key, arr) => {
				displayResults += ' <span>' + val + '</span> ';
				
				if (key !== arr.length - 1) {
					displayResults += ' - ';
				}
			});
		} else {
			resultsTranslation.forEach(val => {
				displayResults += '<div>' + val + '</div>';
			});
		}
	
	} else {
		displayResults = message;
	}
	
	$(target)[0].innerHTML = displayResults;
}


/*
	ROULETTE RELATED
*/
slotsCareerElements = null;
slotsMeleeElements = null;
slotsRangedElements = null;

function drawRoulette() {
	var slots_careers = [];
	var slots_melee = [];
	var slots_ranged = [];

	$('input[id*=' + cat_str.CLASSES + ']:checked').each(function() {
		slots_careers.push($(this).attr('id').replace('cls-', ''));
	});

	$('input[id*=' + cat_str.WPN_MELEE + ']:checked').each(function() {
		slots_melee.push($(this).attr('id').replace('wpnm-', ''));
	});

	$('input[id*=' + cat_str.WPN_RANGED + ']:checked').each(function() {
		slots_ranged.push($(this).attr('id').replace('wpnr-', '').replace('wpnm-', ''));
	});

	// marging melee and ranged weapons in case it's melee-only class
	if(slots_careers.includes(cls_str.BARDIN_SLR) || slots_careers.includes(cls_str.KRUBER_GK)) {
		slots_ranged = slots_ranged.concat(slots_melee);
	}


	slotsCareerElements = '';
	slots_careers.forEach(el => {
		slotsCareerElements += createListImageElement(el);
	});

	slotsMeleeElements = '';
	slots_melee.forEach(el => {
		slotsMeleeElements += createListImageElement(el);
	});

	slotsRangedElements = '';
	slots_ranged.forEach(el => {
		slotsRangedElements += createListImageElement(el);
	});

	$('.slots-col-1')[0].innerHTML = slotsCareerElements;
	$('.slots-col-2')[0].innerHTML = slotsMeleeElements;
	$('.slots-col-3')[0].innerHTML = slotsRangedElements;
}

function getResultIndex(elId, result) {
	return [...$(elId)[0].childNodes].findIndex(item => item.id === result) + 1;
}
