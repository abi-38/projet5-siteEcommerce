let divElt = document.getElementById('monPanier');
let monPanier = localStorage.getItem('monPanier');

let maCommande = localStorage.getItem('maCommande');

if(monPanier == null && maCommande == null){
  let pElt = document.createElement('p');
  divElt.appendChild(pElt);
  pElt.innerHTML = 'Votre panier est vide';
    
} else if(maCommande) {
  let maCommandeElt = JSON.parse(maCommande);

  let pElt = document.createElement('p');
  divElt.appendChild(pElt);
  pElt.innerHTML = 'Votre commande n°' + maCommandeElt.orderId + ' a bien été passé !';
  pElt.classList.add('message');

  let buttonCommandeElt = document.createElement('a');
  divElt.appendChild(buttonCommandeElt);
  buttonCommandeElt.innerHTML = 'Accéder à mon compte';
  buttonCommandeElt.classList.add('accesCommande');

    /////////////
    //EVENEMENT//
    ////////////
  buttonCommandeElt.addEventListener('click', function(e){
    buttonCommandeElt.setAttribute('href', 'commandes.html');
  })

} else {
  let monPanierObject = JSON.parse(monPanier);
  console.log(monPanierObject);
  
  for (let i=0; i < monPanierObject.length; i++) {

    /* Affichage d'un div contenant les éléments de l'article' */
    let divArticleElt = document.createElement('div');
    divElt.appendChild(divArticleElt);
    divArticleElt.classList.add("divArticle");

    /* Affichage du nom de l'article */
    let imgElt = document.createElement('img');
    divArticleElt.appendChild(imgElt);
    imgElt.src = monPanierObject[i][4];
    imgElt.classList.add('imgNounours');
    
    /* Affichage du nom de l'article */
    let h2Elt = document.createElement('h3');
    divArticleElt.appendChild(h2Elt);
    h2Elt.innerHTML = monPanierObject[i][2];

    /* Affichage du prix de l'article */
    let prixElt = document.createElement('p');
    divArticleElt.appendChild(prixElt);
    prixElt.innerHTML = monPanierObject[i][1] + ' €';

    /* Affichage de la couleur de l'article */
    let p2Elt = document.createElement('p');
    divArticleElt.appendChild(p2Elt);
    p2Elt.innerHTML = monPanierObject[i][3];

    /* Affichage le bouton supprimer */
    let buttonElt = document.createElement('a');
    divArticleElt.appendChild(buttonElt);
    buttonElt.innerHTML = "Supprimer l'article";
    buttonElt.classList.add("buttonSuppr");

    /////////////
    //EVENEMENT//
    ////////////
    /* Ajout de l'event sur le bouton supprimer */
    buttonElt.addEventListener('click', function(e) {
      e.stopPropagation;
      e.preventDefault();

      /* Calcul du nombre d'élément dans le panier et le local storage */
      const index = monPanierObject.indexOf(monPanierObject[i]);
      console.log(index);
      
      /* Suppression de l'item selectionné dans le tableau */
      if (index > -1) {
        monPanierObject.splice(index, 1);
      }
      /* On réactualise la page pour que l'article se retire de l'affichage html */
      document.location.reload();

      /* On vide le localstorage */
      localStorage.clear();

      /* S'il n'y a plus d'article on réaffiche le message "panier vide" */
      if (monPanierObject.length === 0) {
        let pElt = document.createElement('p');
        divElt.appendChild(pElt);
        pElt.innerHTML = 'Votre panier est vide';
      /* sinon on réinjecte la variable 'monPanierObject' contenant les articles encore présent dans le localstorage */
    } else{
        localStorage.setItem('monPanier', JSON.stringify(monPanierObject));
      }
      
    })

  }

  
  
  /* Calcul du prix total en créant un tableau vide dans une variable */
  let monArray = [];

  /* Chaque prix d'item est ajouté dans le tableau "monArray" */
  for (let j=0; j < monPanierObject.length; j++) {
    monArray.push(monPanierObject[j][1]);
  }
  
  /* Calcul la somme de tous les prix des items et les range dans la variable "sum" */
  const sum = monArray.reduce((accumulator, currentValue) => {  
    return accumulator + currentValue;
  });

  /* FORM */
  let divFormElt = document.createElement('div');
  divElt.appendChild(divFormElt);
  divFormElt.classList.add('divForm');

  let formElt = document.createElement('form');
  divFormElt.appendChild(formElt);
  formElt.method = 'post';

  /* FIRSTNAME */

  // Création du paragraphe qui contient le label et l'input
  let pFirstName = document.createElement('p');
  formElt.appendChild(pFirstName);
  pFirstName.classList.add('pLabelInput');

  // Création du label dans le paragraphe
  let labelFirstName = document.createElement('label');
  pFirstName.appendChild(labelFirstName);
  labelFirstName. setAttribute ("for", "firstName");
  labelFirstName.innerHTML = 'Nom';
  labelFirstName.classList.add('label');

  // Création de l'input dans le paragraphe
  let inputFirstName = document.createElement('input');
  pFirstName.appendChild(inputFirstName);
  inputFirstName.type = 'text';
  inputFirstName.id = 'firstName';
  inputFirstName.name = 'user_firstName';
  inputFirstName.placeholder = 'Dupont';
  inputFirstName.setAttribute ("required", "required");

  // Création du message d'erreur, il s'affichera dans un span en-dessous de l'input
  let errorMessageFirstName = document.createElement('span');
  pFirstName.appendChild(errorMessageFirstName);
  errorMessageFirstName.classList.add('spanErrorMessage');

  /* Fonction qui sera appelé au click du bouton "commander",
  elle vérifie que la cellule est complétée */
  function validateFirstName() { 
    let inputFirstName = document.getElementById('firstName');
    const regex = /[0-9]/g;
    if (inputFirstName.value == "" || regex.test(inputFirstName.value)) { 
      
      // Cette condition évite que le message d'erreur se répéte à chaque click sur le bouton
      if (errorMessageFirstName.textContent == true) {
        errorMessageFirstName.textContent=""; 
        errorMessageFirstName.textContent="Veuillez entrez un prénom valide"; 
      } else {
        errorMessageFirstName.textContent="Veuillez entrez un prénom valide"; 
        inputFirstName.focus(); 
        return false; 
      }
    } else {
      errorMessageFirstName.textContent=""; 
      return true;
    }
  }
  
  /* LASTNAME */

  // Création du paragraphe qui contient le label et l'input
  let pLastName = document.createElement('p');
  formElt.appendChild(pLastName);
  pLastName.classList.add('pLabelInput');

  // Création du label dans le paragraphe
  let labelLastName = document.createElement('label');
  pLastName.appendChild(labelLastName);
  labelLastName. setAttribute ("for", "lastName");
  labelLastName.innerHTML = 'Prénom';
  labelLastName.classList.add('label');

  // Création de l'input dans le paragraphe
  let inputLastName = document.createElement('input');
  pLastName.appendChild(inputLastName);
  inputLastName.type = 'text';
  inputLastName.id = 'lastName';
  inputLastName.name = "user_lastName";
  inputLastName.placeholder = 'Jacques';
  inputLastName.classList.add('label');
  inputLastName.setAttribute ("required", "required");

  // Création du message d'erreur, il s'affichera dans un span en-dessous de l'input
  let errorMessageLastName = document.createElement('span');
  pLastName.appendChild(errorMessageLastName);
  errorMessageLastName.classList.add('spanErrorMessage');

  /* Fonction qui sera appelé au click du bouton "commander",
  elle vérifie que la cellule est complétée */
  function validateLastName() { 
    let inputLastName = document.getElementById('lastName');
    const regex = /[0-9]/g;
    if (inputLastName.value == "" || regex.test(inputLastName.value)) { 

      if (errorMessageLastName.textContent == true) {
        errorMessageLastName.textContent=""; 
        errorMessageLastName.textContent="Veuillez entrez un nom valide"; 
      } else {
        errorMessageLastName.textContent="Veuillez entrez un nom valide"; 
      }

      inputLastName.focus(); 
      return false; 
    } else {
      errorMessageLastName.textContent=""; 
      return true;
    }
  }

  /* ADDRESS */

  // Création du paragraphe qui contient le label et l'input
  let pAddress = document.createElement('p');
  formElt.appendChild(pAddress);
  pAddress.classList.add('pLabelInput');

  // Création du label dans le paragraphe
  let labelAddress = document.createElement('label');
  pAddress.appendChild(labelAddress);
  labelAddress. setAttribute ("for", "address");
  labelAddress.innerHTML = 'Adresse postale';

  // Création de l'input dans le paragraphe
  let inputAddress = document.createElement('input');
  pAddress.appendChild(inputAddress);
  inputAddress.type = 'text';
  inputAddress.id = 'address';
  inputAddress.name = "user_address";
  inputAddress.placeholder = 'rue de la ficelle';
  inputAddress.setAttribute ("required", "required");

  // Création du message d'erreur, il s'affichera dans un span en-dessous de l'input
  let errorMessageAddress = document.createElement('span');
  pAddress.appendChild(errorMessageAddress);
  errorMessageAddress.classList.add('spanErrorMessage');

  /* Fonction qui sera appelé au click du bouton "commander",
  elle vérifie que la cellule est complétée */
  function validateAddress() { 
    let inputAddress = document.getElementById('address');
    const regex = /^([a-z]|[0-9]){1,2}$/;
    if (inputAddress.value == "" || regex.test(inputAddress.value)) { 
      
      if (errorMessageAddress.textContent == true) {
        errorMessageAddress.textContent=""; 
        errorMessageAddress.textContent="Veuillez entrez une addresse valide"; 
      } else {
        errorMessageAddress.textContent="Veuillez entrez une addresse valide"; 
      }

      inputAddress.focus(); 
      return false; 
    } else {
      errorMessageAddress.textContent=""; 
      return true;
    }
  }
  
  /* VILLE */

  // Création du paragraphe qui contient le label et l'input
  let pVille = document.createElement('p');
  formElt.appendChild(pVille);
  pVille.classList.add('pLabelInput');

  // Création du label dans le paragraphe
  let labelCity = document.createElement('label');
  pVille.appendChild(labelCity);
  labelCity. setAttribute ("for", "city");
  labelCity.innerHTML = 'Ville';
  labelCity.classList.add('label');

  // Création de l'input dans le paragraphe
  let inputCity = document.createElement('input');
  pVille.appendChild(inputCity);
  inputCity.type = 'text';
  inputCity.id = 'city';
  inputCity.name = "city";
  inputCity.placeholder = 'Paris';
  inputCity.setAttribute ("required", "required");

  // Création du message d'erreur, il s'affichera dans un span en-dessous de l'input
  let errorMessageCity = document.createElement('span');
  pVille.appendChild(errorMessageCity);
  errorMessageCity.classList.add('spanErrorMessage');

  /* Fonction qui sera appelée au click du bouton "commander",
  elle vérifie que la cellule est complétée */
  function validateCity() { 
    let inputCity = document.getElementById('city');
    const regex = /[0-9]/g;
    if (inputCity.value == "" || regex.test(inputCity.value)) { 
      
      if (errorMessageCity.textContent == true) {
        errorMessageCity.textContent=""; 
        errorMessageCity.textContent="Veuillez entrez un nom de ville valide"; 
      } else {
        errorMessageCity.textContent="Veuillez entrez un nom de ville valide"; 
      }

      inputCity.focus(); 
      return false; 
    } else {
      errorMessageCity.textContent=""; 
      return true;
    }
  }

  /* EMAIL */

  // Création du paragraphe qui contient le label et l'input
  let pEmail = document.createElement('p');
  formElt.appendChild(pEmail);
  pEmail.classList.add('pLabelInput');

  // Création du label dans le paragraphe
  let labelEmail = document.createElement('label');
  pEmail.appendChild(labelEmail);
  labelEmail. setAttribute ("for", "email");
  labelEmail.innerHTML = 'Adresse email';
  labelEmail.classList.add('label');

  // Création de l'input dans le paragraphe
  let inputEmail = document.createElement('input');
  pEmail.appendChild(inputEmail);
  inputEmail.type = 'email';
  inputEmail.id = 'email';
  inputEmail.name = "user_email";
  inputEmail.placeholder = 'dupont.jacques@gmail.com';
  inputEmail.setAttribute ("required", "required");

  // Création du message d'erreur, il s'affichera dans un span en-dessous de l'input
  let errorMessageEmail = document.createElement('span');
  pEmail.appendChild(errorMessageEmail);
  errorMessageEmail.classList.add('spanErrorMessage');

  /* Fonction qui sera appelée au click du bouton "commander",
  elle vérifie que la cellule est complétée */
  function validateEmail() { 
    let inputEmail = document.getElementById('email');
    const regex = /^([a-zA-Z0-9_-]+)|([a-zA-Z0-9_-]+\.[a-zA-Z0-9_-])+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
    if (inputEmail.value == "" || regex.exec(inputEmail.value)==null) { 
      
      if (errorMessageEmail.textContent == true) {
        errorMessageEmail.textContent=""; 
        errorMessageEmail.textContent="Veuillez entrez une adresse mail valide"; 
      } else {
        errorMessageEmail.textContent="Veuillez entrez une adresse mail valide"; 
      }

      inputEmail.focus(); 
      return false; 
    } else {
      errorMessageEmail.textContent=""; 
      return true;
    }
  }

  // Affichage de l'indication "Les champs indiqués par une * sont obligatoires"
  let indicationElt = document.createElement('p');
  formElt.appendChild(indicationElt);
  indicationElt.textContent = 'Les champs indiqués par une * sont obligatoires';
  indicationElt.classList.add('indication');

  let buttonCommande = document.createElement('a');
  divFormElt.appendChild(buttonCommande);
  buttonCommande.innerHTML = 'Passer commande';
  buttonCommande.classList.add('commandeBtn');

  // Affichage du texte "total"
  let totalElt = document.createElement('p');
  divFormElt.appendChild(totalElt);
  totalElt.innerHTML = 'Total :';

  // Affichage du prix total des articles
  let resultElt = document.createElement('h3');
  divFormElt.appendChild(resultElt);
  resultElt.innerHTML = sum;

  /////////////
  //EVENEMENT//
  ////////////
  // Ajout d'un evénement sur le bouton "commander"
  buttonCommande.addEventListener('click', function(e) {

    // Récupération des variables qui vérifie que les champs sont bien complétés
    let validFirstName = validateFirstName();
    let validLastName = validateLastName();
    let validAddress = validateAddress();
    let validCity = validateCity();
    let validEmail = validateEmail();

    // Condition qui vérifie que ces variables sont correctes
    if (validFirstName && validLastName && validAddress && validCity && validEmail) {

      /* Mettre ces éléments en storage pour sauvegarde */
      // Création de l'objet contact
      let contact = {
        firstName: inputFirstName.value,
        lastName: inputLastName.value,
        address: inputAddress.value,
        city: inputCity.value,
        email: inputEmail.value,
      }
      localStorage.setItem('contact', JSON.stringify(contact));

      // Création du tableau avec les id des produits du panier
      let products = [];
      for (let k=0; k < monPanierObject.length; k++) {
        products.push(monPanierObject[k][0]);
        console.log(products);
        localStorage.setItem('products', JSON.stringify(products));
      }

      // Lancement de la requête fetch - envoi de la commande au serveur
      fetch("http://localhost:3000/api/teddies/order", {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({contact, products})
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        console.log(JSON.stringify(data));
        localStorage.setItem('maCommande', JSON.stringify(data));

        localStorage.removeItem('contact');
        localStorage.removeItem('monPanier');
        localStorage.removeItem('products');

        document.location.reload();
        
      });
    }
  })
}



