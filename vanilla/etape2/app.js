const generator = {

    generator1: {
        part1: ["G1part1.1", "G1part1.2", "G1part1.3"],
        part2: ["G1part2.1", "G1part2.2", "G1part2.3"],
        part3: ["G1part3.1", "G1part3.2", "G1part3.3"],
    },
    generator2: {
        part1: ["G2part1.1", "G2part1.2", "G2part1.3"],
        part2: ["G2part2.1", "G2part2.2", "G2part2.3"],
        part3: ["G2part3.1", "G2part3.2", "G2part3.3"],
    }
}

/**
 * Génération aléatoire d'une portion de phrase
 * @param key La clé dans laquelle je souhaite récupérer ma portion de phrase
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
    //const citations = document.querySelector('#citations');
    const categorie = event.target.categorie.value;
    const nbCitations = parseInt(event.target.nbCitations.value);
    //citations.innerHTML = '';
    const citations = document.createElement('ul')
    for (let i = 0; i < nbCitations; i++) {
        citations.innerHTML += `<li>${getRandomPart(categorie, 'part1')} ${getRandomPart(categorie, 'part2')} ${getRandomPart(categorie, 'part3')}.</li>`;
    }
    Swal.fire({
        title: 'Vos citations',
        html: citations,
        icon: 'success',
        confirmButtonText: 'Merci'
    })
}

const form = document.querySelector('form')
form.addEventListener('submit', function (e) {
    e.preventDefault();
    generate(e);
})
