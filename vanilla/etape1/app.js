const generator = {
    part1: ["part1.1", "part1.2", "part1.3"],
    part2: ["part2.1", "part2.2", "part2.3"],
    part3: ["part3.1", "part3.2", "part3.3"],
}

/**
 * Génération aléatoire d'une portion de phrase
 * @param key La clé dans laquelle je souhaite récupérer ma portion de phrase
 * @returns La portions de phrase aléatoire
 */
function getRandomPart(key){
    const max = generator[key].length;
    const idx = Math.floor(Math.random() * (max - 0));
    return generator[key][idx];
}

/**
 * Affichage de la phrase aléatoire générée
 */
function generate(){
    const citations = document.querySelector('#citations');
    citations.innerHTML = `<li>${getRandomPart('part1')} ${getRandomPart('part2')} ${getRandomPart('part3')}.</li>`
}

/**
 Ajout d'un évènement click sur le bouton générer pour rafraichir la citation générée
 */
const generateBtn = document.querySelector('#generate')
generateBtn.addEventListener('click', function(e){
    generate()
})

// choix à partir du bouton radio
function getType() {
    let citationType = document.querySelector("input[name = categorie]:checked").value;
    return citationType;
}

// choix du nombre de citation à partir du bouton radio
function getCitationNumber() {
    let nbCitation = document.querySelector("input[name = nbCitations]:checked").value;
    return nbCitation;
}

// Fonction pour génerer une citation
function generer() {
    let nombreCitation = getCitationNumber();
    let citationType = getType();
    document.getElementById("genreCitation").innerHTML = "--- Citation de " + citationType;
    document.getElementById("playCitation").innerHTML = "";
    for (let i = 0; i < nombreCitation; i++) {
        document.getElementById("playCitation").innerHTML += "<li>" + "<blockquote>" + generate(generator[citationType]);
    }
}

