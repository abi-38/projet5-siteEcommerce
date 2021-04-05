let params = (new URL(document.location)).searchParams;
let nounours = params.get('nounours');
console.log(nounours);

fetch("http://localhost:3000/api/teddies/" + nounours) /*envoie de la requête*/
.then(response => response.json()) /*attente récéption donnée + traduction*/
.then(data => { /*stockage des données dans la variable data*/
    console.log(data)
    const boiteANounous = document.getElementById("desciptionNounours");

    let divNounours = document.createElement('div');
    boiteANounous.appendChild(divNounours);
    divNounours.className = 'nounours';

    let imgNounours = document.createElement('img');
    divNounours.appendChild(imgNounours);
    imgNounours.src = data.imageUrl;

    let titreNounours = document.createElement('h3');
    divNounours.appendChild(titreNounours);
    titreNounours.innerHTML = data.name;

    let descriptionNounours = document.createElement('p');
    divNounours.appendChild(descriptionNounours);
    descriptionNounours.innerHTML = data.description;

    let priceNounours = document.createElement('p');
    divNounours.appendChild(priceNounours);
    priceNounours.innerHTML = data.price + ' €';

    let labelNounours = document.createElement('label');
    divNounours.appendChild(labelNounours);
    labelNounours.innerHTML = "Choisissez votre couleur :";
    labelNounours.htmlFor = ("color");
    let selectNounours = document.createElement('select');
    divNounours.appendChild(selectNounours);
    selectNounours.id = ("color");

    for (let j=0; j < data.colors.length; j++) {
        let optionNounours = document.createElement('option');
        selectNounours.appendChild(optionNounours);
        optionNounours.innerHTML = data.colors[j];
        optionNounours.value = (data.colors[j]);
    }

    let buttonNounours = document.createElement('a');
    divNounours.appendChild(buttonNounours);
    buttonNounours.innerHTML = 'Ajouter au panier';
    buttonNounours.classList.add('button');


    buttonNounours.addEventListener('click', function(e) {
        /* je regarde si le panier existe déjà */        
        /* s'il existe alors je le traduit en tableau -> json.parse + j'ajoute au tableau le nounours et le remettre en storage -> json.stringify */
        let monPanier = localStorage.getItem('monPanier');
        if(monPanier == null){
            let monArticle = [];
            monArticle.push([nounours, data.price, data.name, selectNounours.options[selectNounours.selectedIndex].value, data.imageUrl]);
            localStorage.setItem('monPanier', JSON.stringify(monArticle));
        /* sinon je crée + ajout nounours + le mettre en storage -> json.stringify */
        } else {
            let monAjout = JSON.parse(monPanier);
            monAjout.push([nounours, data.price, data.name, selectNounours.options[selectNounours.selectedIndex].value, data.imageUrl]);
            localStorage.setItem('monPanier', JSON.stringify(monAjout));
        }
    })
})
