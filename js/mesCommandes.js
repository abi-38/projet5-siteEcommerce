let mesCommandesElt = document.getElementById('mesCommandes');

let maCommande = localStorage.getItem('maCommande');

if(maCommande == null){
    let pElt = document.createElement('p');
    mesCommandesElt.appendChild(pElt);
    pElt.innerHTML = "Vous n'avez pas de commandes den cours";
      
  } else {
    let pElt = document.createElement('p');
    mesCommandesElt.appendChild(pElt);

    let maCommandeElt = JSON.parse(maCommande);
    console.log(maCommandeElt);

    pElt.innerHTML = 'Votre commande n°' + maCommandeElt.orderId + ' a bien été passé !';
    pElt.classList.add('message');

    /* Affichage d'un div contenant les info de contact et le titre h3 */
    let divContactTitreElt = document.createElement('div');
    mesCommandesElt.appendChild(divContactTitreElt);
    divContactTitreElt.classList.add("divContact");

    /* Affichage d'un titre h3 pour afficher les informations de contact */
    let h3CommandeElt = document.createElement('h3');
    divContactTitreElt.appendChild(h3CommandeElt);
    h3CommandeElt.innerHTML = 'Mes informations';
    h3CommandeElt.classList.add('h3');

    /* Affichage d'un div contenant uniquement les info de contact */
    let divContactElt = document.createElement('div');
    divContactTitreElt.appendChild(divContactElt);
    divContactElt.classList.add('divContactOnly');

    /* Affichage du nom du contact */
    let pFirstNameElt = document.createElement('p');
    divContactElt.appendChild(pFirstNameElt);
    pFirstNameElt.innerHTML = 'Nom: ' + maCommandeElt.contact.firstName;
    pFirstNameElt.classList.add('infoContat');
    
    /* Affichage du prénom du contact */
    let pLastNameElt = document.createElement('p');
    divContactElt.appendChild(pLastNameElt);
    pLastNameElt.innerHTML = 'Prénom: ' + maCommandeElt.contact.lastName;
    pLastNameElt.classList.add('infoContat');

    /* Affichage de l'adresse du contact */
    let pAddressElt = document.createElement('p');
    divContactElt.appendChild(pAddressElt);
    pAddressElt.innerHTML = 'Adresse: ' + maCommandeElt.contact.address;
    pAddressElt.classList.add('infoContat');

    /* Affichage de la ville du contact */
    let pCityElt = document.createElement('p');
    divContactElt.appendChild(pCityElt);
    pCityElt.innerHTML = 'Ville: ' + maCommandeElt.contact.city;
    pCityElt.classList.add('infoContat');

    /* Affichage de l'adresse email du contact */
    let pAEmailElt = document.createElement('p');
    divContactElt.appendChild(pAEmailElt);
    pAEmailElt.innerHTML = 'Email: ' + maCommandeElt.contact.email;
    pAEmailElt.classList.add('infoContat');

    /* Affichage d'un div contenant le ou les article(s) commandé(s) */
    let divArticlesElt = document.createElement('div');
    mesCommandesElt.appendChild(divArticlesElt);
    divArticlesElt.classList.add("divArticles");

    /* Affichage d'un titre h3 pour afficher le ou les article(s) commandé(s) */
    let h3ArticleElt = document.createElement('h3');
    divArticlesElt.appendChild(h3ArticleElt);
    h3ArticleElt.innerHTML = 'Mon ou mes article(s) commandé(s)';
    h3ArticleElt.classList.add('h3');

    for (let i=0; i < maCommandeElt.products.length; i++) {

        /* Affichage d'un div contenant les éléments de l'article' */
        let divArticleElt = document.createElement('div');
        divArticlesElt.appendChild(divArticleElt);
        divArticleElt.classList.add("divArticle");
    
        /* Affichage du nom de l'article */
        let imgElt = document.createElement('img');
        divArticleElt.appendChild(imgElt);
        imgElt.src = maCommandeElt.products[i].imageUrl;
        imgElt.classList.add('imgNounours');
        
        /* Affichage du nom de l'article */
        let h2Elt = document.createElement('h3');
        divArticleElt.appendChild(h2Elt);
        h2Elt.innerHTML = maCommandeElt.products[i].name;
    
        /* Affichage du prix de l'article */
        let prixElt = document.createElement('p');
        divArticleElt.appendChild(prixElt);
        prixElt.innerHTML = maCommandeElt.products[i].price /100 + ' €';
    
        /* Affichage de la couleur de l'article */
        let p2Elt = document.createElement('p');
        divArticleElt.appendChild(p2Elt);
        p2Elt.innerHTML = maCommandeElt.products[i].description;
    }
  
}