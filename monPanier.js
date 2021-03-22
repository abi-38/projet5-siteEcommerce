let divElt = document.getElementById('monPanier');

let monPanier = localStorage.getItem('monPanier');
if(monPanier == null){
  let pElt = document.createElement('p');
  divElt.appendChild(pElt);
  pElt.innerHTML = 'Votre panier est vide';
    
} else {
  let monPanierObject = JSON.parse(monPanier);
  console.log(monPanierObject);
  
  for (let i=0; i < monPanierObject.length; i++) {

    /* Affichage d'un div contenant les éléments de l'article' */
    let divArticleElt = document.createElement('div');
    divElt.appendChild(divArticleElt);
    divArticleElt.classList.add("divArticle");
    
    /* Affichage du nom de l'article */
    let h2Elt = document.createElement('h2');
    divArticleElt.appendChild(h2Elt);
    h2Elt.innerHTML = monPanierObject[i][2];

    /* Affichage du prix de l'article */
    let prixElt = document.createElement('p');
    divArticleElt.appendChild(prixElt);
    prixElt.innerHTML = monPanierObject[i][1];

    /* Affichage de la couleur de l'article */
    let p2Elt = document.createElement('p');
    divArticleElt.appendChild(p2Elt);
    p2Elt.innerHTML = monPanierObject[i][3];

    /* Affichage le bouton supprimer */
    let buttonElt = document.createElement('button');
    divArticleElt.appendChild(buttonElt);
    buttonElt.innerHTML = "supprimer l'article";
    buttonElt.classList.add("buttonSuppr");

    buttonElt.addEventListener('click', function(e) {
      e.stopPropagation;
      e.preventDefault();
      console.log(JSON.stringify(monPanierObject[i]));
      localStorage.removeItem('monPanier.0');


      const index = monPanierObject.indexOf(monPanierObject[i]);
      console.log(index);
      
      if (index > -1) {
        monPanierObject.splice(index, 1);
      }
      document.location.reload();
      console.log(monPanierObject); 
      localStorage.clear();
      if (monPanierObject.length === 0) {
        let pElt = document.createElement('p');
        divElt.appendChild(pElt);
        pElt.innerHTML = 'Votre panier est vide';
    } else{
        localStorage.setItem('monPanier', JSON.stringify(monPanierObject));
      }
      
    })

  }

  
  

  let monArray = [];
  console.log(monArray);

  for (let j=0; j < monPanierObject.length; j++) {
    monArray.push(monPanierObject[j][1]);
    console.log(monArray);
  }

  const sum = monArray.reduce((accumulator, currentValue) => {  
    return accumulator + currentValue;
  });
  
  console.log(sum); 

  let resultElt = document.createElement('p');
  divElt.appendChild(resultElt);
  resultElt.innerHTML = 'Total :' + sum;

  /* FORM */
  let formElt = document.createElement('form');
  divElt.appendChild(formElt);
  formElt.method = 'post';

  /* firstname */
  let labelFirstName = document.createElement('label');
  formElt.appendChild(labelFirstName);
  labelFirstName. setAttribute ("for", "firstName");
  labelFirstName.innerHTML = 'firstName';

  let inputFirstName = document.createElement('input');
  formElt.appendChild(inputFirstName);
  inputFirstName.type = 'text';
  inputFirstName.id = 'firstName';
  inputFirstName.name = 'user_firstName';
  inputFirstName.placeholder = 'Dupont';
  
  /* lastname */
  let labelLastName = document.createElement('label');
  formElt.appendChild(labelLastName);
  labelLastName. setAttribute ("for", "lastName");
  labelLastName.innerHTML = 'lastName';

  let inputLastName = document.createElement('input');
  formElt.appendChild(inputLastName);
  inputLastName.type = 'text';
  inputLastName.id = 'lastName';
  inputLastName.name = "user_lastName";
  inputLastName.placeholder = 'Jacques';

  /* address */
  let labelAddress = document.createElement('label');
  formElt.appendChild(labelAddress);
  labelAddress. setAttribute ("for", "address");
  labelAddress.innerHTML = 'address';

  let inputAddress = document.createElement('input');
  formElt.appendChild(inputAddress);
  inputAddress.type = 'text';
  inputAddress.id = 'address';
  inputAddress.name = "user_address";
  inputAddress.placeholder = 'rue de la ficelle';
    
  /* city */
  let labelCity = document.createElement('label');
  formElt.appendChild(labelCity);
  labelCity. setAttribute ("for", "city");
  labelCity.innerHTML = 'city';

  let inputCity = document.createElement('input');
  formElt.appendChild(inputCity);
  inputCity.type = 'text';
  inputCity.id = 'city';
  inputCity.name = "city";
  inputCity.placeholder = 'Paris';

  /* email */
  let labelEmail = document.createElement('label');
  formElt.appendChild(labelEmail);
  labelEmail. setAttribute ("for", "email");
  labelEmail.innerHTML = 'email';

  let inputEmail = document.createElement('input');
  formElt.appendChild(inputEmail);
  inputEmail.type = 'email';
  inputEmail.id = 'email';
  inputEmail.name = "user_email";
  inputEmail.placeholder = 'dupont.jacques@gmail.com';

  let buttonCommande = document.createElement('button');
  divElt.appendChild(buttonCommande);
  buttonCommande.innerHTML = 'Passer commande';

  /*
  buttonCommande.addEventListener('click', function(e) {
    let response = await fetch('/article/fetch/post/user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(user)
  });
  
  let result = await response.json();
  alert(result.message);

  })*/
}
