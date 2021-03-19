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
        imgNounours.style.width = '100px'

        let titreNounours = document.createElement('p');
        divNounours.appendChild(titreNounours);
        titreNounours.innerHTML = data[i].name;

        let priceNounours = document.createElement('p');
        divNounours.appendChild(priceNounours);
        priceNounours.innerHTML = data[i].price;

        let aNounours = document.createElement('a');
        divNounours.appendChild(aNounours);
        aNounours.innerHTML = "Voir plus";
        aNounours.setAttribute('href', 'ficheProduitNounours.html?nounours=' + data[i]._id);

    }
})
