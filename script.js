document.getElementById('language-dropdown').addEventListener('change', function() {
    var slogan = document.getElementById('slogan');
    var title;

    switch (this.value) {
        case 'sr':
            slogan.innerText = 'У јединству снага, у различитости богатство.';
            title = "Братство и јединство";
            break;
        case 'es':
            slogan.innerText = 'En la unidad está la fuerza, en la diversidad la riqueza.';
            title = "Hermandad y Unidad";
            break;
        case 'fr':
            slogan.innerText = "Dans l'unité se trouve la force, dans la diversité la richesse.";
            title = "Fraternité et Unité";
            break;
        case 'it':
            slogan.innerText = "Nell'unità c'è forza, nella diversità ricchezza.";
            title = "Fratellanza e Unità";
            break;
        case 'ru':
            slogan.innerText = 'В единстве сила, в разнообразии богатство.';
            title = "Братство и Единство";
            break;
        case 'de':
            slogan.innerText = 'In der Einheit liegt die Stärke, in der Vielfalt der Reichtum.';
            title = "Brüderlichkeit und Einheit";
            break;
        case 'pt':
            slogan.innerText = 'Na unidade está a força, na diversidade a riqueza.';
            title = "Irmandade e Unidade";
            break;
        case 'ga':
            slogan.innerText = 'Tá neart in aontacht, saibhreas in éagsúlacht.';
            title = "Bráithreachas agus Aontacht";
            break;
        case 'sq':
            slogan.innerText = 'Në unitet është forca, në ndryshim pasuria.';
            title = "Vëllazëria dhe Bashkimi";
            break;
        case 'ar':
            slogan.innerText = 'في الوحدة قوة، في التنوع ثروة.';
            title = "الأخوة والوحدة";
            break;
        case 'zh':
            slogan.innerText = '团结就是力量，多样性就是财富。';
            title = "兄弟情谊与团结";
            break;
        case 'en':
            slogan.innerText = 'In unity there is strength, in diversity wealth.';
            title = "Brotherhood and Unity";
            break;
    }

    document.title = title;
});


document.getElementById('mute-button').addEventListener('click', function() {
    var video = document.getElementById('background-video');
    if (video.muted) {
        video.muted = false;
        this.innerText = 'Mute';
    } else {
        video.muted = true;
        this.innerText = 'Unmute';
    }
});
