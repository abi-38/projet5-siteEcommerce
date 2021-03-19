let divElt = document.getElementById('monPanier');

let monPanier = localStorage.getItem('monPanier');
if(monPanier == null){
  let pElt = document.createElement('p');
  divElt.appendChild(pElt);
  pElt.innerHTML = 'Votre panier est vide';
    
} else {
  let monPanierObject = JSON.parse(monPanier)
  console.log(monPanierObject);
  let divNounours = document.createElement('div');
  divElt.appendChild(divNounours);
  divNounours.innerHTML = monPanier[4];

  /*
  for (let i=0; i < monPanier.length; i++) {
    let divNounours = document.createElement('div');
    divElt.appendChild(divNounours);
    divNounours.innerHTML = monPanier[i];
  }*/

  let pElt = document.createElement('p');
  divElt.appendChild(pElt);
  pElt.innerHTML = monPanierObject;
}







/*
buttonElt.addEventListener('input', function(e) {
    console.log('ok');
    localStorage.setItem('monArray', e.target.value);
    
    
    
    let monPanierElt = document.getElementById('monPanier');
    monPanierElt.innerHTML = '';
    monPanierElt.innerHTML += 'monString = ' + localStorage.getItem('monString') + '<br>';
    monPanierElt.innerHTML += 'monBool = ' + localStorage.getItem('monBool') + '<br>';
    monPanierElt.innerHTML += 'monArray = ' + localStorage.getItem('monArray') + '<br>';
    monPanierElt.innerHTML += 'monObjet = ' + localStorage.getItem('monObjet') + '<br>';
   
})


/*
let response = await fetch('/article/fetch/post/user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(user)
  });
  
  let result = await response.json();
  alert(result.message);
}*/