const generator = {

    generator1: {
        part1: ["La seule façon", "La meilleure des façons", "Le meilleur moyen"],
        part2: ["pour réussir,", "d'être heureux,", "de vivre,"],
        part3: ["c'est d'aimer ce que vous faites", "ne dépend que de vous", "c'est de s'obstiner"],
    },
    generator2: {
        part1: ["Au printemps,", "j’aime bien regarder du haut des remparts au lever du soleil..., ", "c'est pas faux !"],
        part2: ["Dans le Languedoc, ils m'appellent Provençal ", "le vocabulaire et les épinards, ", "y’a une belle vue !"],
        part3: ["Dans la vie, j'avais deux ennemis : ", "par exemple, Sire, Léodagan et moi on fait semblant de vous prendre en otage \", \"vous pouvez être sûr que le Graal, ", "mais c'est moi qui m'suis gouré en disant mon nom."],
    }
}

/**
 * Génération aléatoire d'une portion de phrase
 * @param key La clé dans laquelle je souhaite récupérer ma portion de phrase
 * @pram
 * @returns La portions de phrase aléatoire
 */
function getRandomPart(categorie, key) {
    const max = generator[categorie][key].length;
    const idx = Math.floor(Math.random() * (max - 0));
    return generator[categorie][key][idx];
}

/**
 * Affichage de la phrase aléatoire générée
 */
function generate(event) {
    const citations = document.querySelector('#citations');
    const categorie = event.target.categorie.value;
    const nbCitations = parseInt(event.target.nbCitations.value);
    citations.innerHTML = '';
    for (let i = 0; i < nbCitations; i++) {
        citations.innerHTML += `<li>${getRandomPart(categorie, 'part1')} ${getRandomPart(categorie, 'part2')} ${getRandomPart(categorie, 'part3')}.</li>`;
    }
}

const form = document.querySelector('form')
form.addEventListener('submit', function (e) {
    e.preventDefault();
    generate(e);
})

/** Animations

 let controller = new ScrollMagic.Controller();

 let scene = new ScrollMagic.Scene({

    triggerElement: 'title-container',
    reverse: false


})

 .setClassToggle('title-container', 'fade-in')
 .addIndicators({
        name: 'INDICATIONS',
        indent: 200,
        colorStart: '#fb0606'
    })
 .addTo(controller);

let scene2 = new ScrollMagic.Scene({

    triggerElement: '.box',
    reverse: false


})

    .setClassToggle('.box', 'fade-in')
    .addIndicators({
        name: 'INDICATIONS',
        indent: 200,
        colorStart: '#fc0000'
    })
    .addTo(controller);

 **/