res_lang = res_en;

function setLanguage(lang, firstTime) {
    lang = lang ?? 'en';

    switch (lang) {
        case 'pl':
            res_lang = res_pl;
            break;
        default:
            res_lang = res_en;
    }

    localStorage.setItem('lang', lang);

    // setting apropriate select option
    $('#language-change').val(lang);

    // iterating over all elements that include 'i18n' in name and setting related translations
    for(const el of $('[name*=i18n')) {
        var parts = el.attributes.name.value.split('-').splice(1);
        el.innerHTML = getTranslation(parts);
    }

    // reloading all variables set initially (to avoid recursion)
    if (!firstTime) {
        init();
    }
}

// iterates over array of properties got from element's name and returns value from trnslation file
function getTranslation(properties_array, lang_file) {
    var translation = lang_file ?? res_lang;

    for(const el of properties_array) {
        translation = translation[el];
    }

    // using the english translation by default if one is missing or empty
    if (!translation) {
        translation = `@[${getTranslation(properties_array, res_en)}]`;
    }

    return translation;
}

function showContributionInfo() {
    var alert = $('#alert-contribute-info');

    if (alert[0].style.display == 'block') {
        alert.hide();
    } else {
        alert.show();
    }
}
