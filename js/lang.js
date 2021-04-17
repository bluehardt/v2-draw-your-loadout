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
        el.innerHTML = getTranslation(parts, res_lang);
    }

    // reloading all variables set initially (to avoid recursion)
    if (!firstTime) {
        init();
    }
}

// iterates over array of properties got from element's name and returns value from trnslation file
function getTranslation(properties_array, lang_file) {
    for(const el of properties_array) {
        lang_file = lang_file[el]
    }

    return lang_file;
}
