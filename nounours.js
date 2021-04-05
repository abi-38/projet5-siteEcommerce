fetch("http://localhost:3000/api/teddies")
.then(response => response.json())
.then(data => {
    const boiteANounours = document.getElementById("boiteANounours");
    for (let i=0; i < data.length; i++) {

        let divNounours = document.createElement('div');
        boiteANounours.appendChild(divNounours);
        divNounours.className = 'nounours';

        let imgNounours = document.createElement('img');
        divNounours.appendChild(imgNounours);
        imgNounours.src = data[i].imageUrl;
        imgNounours.classList.add('imgNounours');

        let divTitrePrix = document.createElement('div');
        divNounours.appendChild(divTitrePrix);
        divTitrePrix.classList.add('titrePrix');

        let titreNounours = document.createElement('h3');
        divTitrePrix.appendChild(titreNounours);
        titreNounours.innerHTML = data[i].name;

        let priceNounours = document.createElement('p');
        divTitrePrix.appendChild(priceNounours);
        priceNounours.innerHTML = data[i].price + ' €';

        let aNounours = document.createElement('a');
        divNounours.appendChild(aNounours);
        aNounours.innerHTML = "Voir plus";
        aNounours.classList.add('voirPlus');
        aNounours.setAttribute('href', 'ficheProduitNounours.html?nounours=' + data[i]._id);

    }
})
