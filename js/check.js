//random integer (0 - max-1)
function rand(max) {
	var min = 0;
	return Math.floor(Math.random() * (max - min)) + min;
};

//toggle all in a column
function toggleAll(type) {
	$('#' + type + '-all').click(function(event) {
		var $that = $(this);
        $('input').each(function() {
            this.checked = $that.is(':checked');
        });
	});
};

//toggle all subclasses and weapons for a chosen character
function toggleCharRelated(name) {
	$('#chars-' + name).click(function(event) {
		var $that = $(this);
        $('[id*=' + name + ']').each(function() {
			this.checked = $that.is(':checked');
		});
	});
};

//TODO: toggle class specific weapons
function toggleClassRelated() {};

//TODO: generate loadout
function drawLoadout() {
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
	//TODO: extract name in better way
	rand_ch_name = rand_ch.substring(6);
	
	//get array of checked hero's classes
	$('input[id*=' + cat_str.CLASSES + '-' + rand_ch_name + ']:checked').each(function() {
		cls_arr.push($(this).attr('id'));
	});
	//TODO: default array in case intial one is empty!
	
	//draw class
	rand_cls = cls_arr[rand(cls_arr.length)];
	rand_cls_name = rand_cls.substring(rand_cls.indexOf('-') + 1, rand_cls.lastIndexOf('-'));
	rand_cls_num = rand_cls.substring(rand_cls.lastIndexOf('-') + 1);
	
	//get array of checked melee weapons for randomed class which can be used by it
	$('input[id*=' + cat_str.WPN_MELEE + '-' + rand_ch_name + ']:checked').each(function() {
		var id = $(this).attr('id');
		if(id.substring(id.lastIndexOf('-') + 1).includes(rand_cls_num)) {
			wpnm_arr.push(id);
		};
	});
	//TODO: default array in case intial one is empty!
	
	//draw weapon
	rand_wpnm = wpnm_arr[rand(wpnm_arr.length)];
	rand_wpnm_name = rand_wpnm.substring(rand_wpnm.indexOf('-') + 1, rand_wpnm.lastIndexOf('-'));
	
	//in case of bardin slayer he can also equip melee weapons in 2nd slot
	if(rand_cls.includes(cls_str.BARDIN_SLR)) {
		wpnr_arr = wpnm_arr.concat();
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
	rand_wpnr_name = rand_wpnr.substring(rand_wpnr.indexOf('-') + 1, rand_wpnr.lastIndexOf('-'));
	
	return rand_ch_name + ' - ' + rand_cls_name + ' - ' + rand_wpnm_name + ' - ' + rand_wpnr_name;
}