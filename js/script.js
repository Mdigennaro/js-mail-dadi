//Esercizio Mail

/*
1. Chiedere la mail
2. Controllare se è presente nella lista
3. Stampare la presenza o la non presenza
*/

const mail = [
  'andreab@gmail.com',
  'federico@gmail.com',
  'cristian@gmail.com',
  'davide@gmail.com',
  'alberto@gmail.com',
  'mauro@gmail.com',
  'matteod@gmail.com',
  'michele@gmail.com',
  'matteof@gmail.com',
  'andreaf@gmail.com',
  'simone@gmail.com',
  'mattiag@gmail.com',
  'larisa@gmail.com',
  'manuel@gmail.com',
  'matteol@gmail.com',
  'francesco@gmail.com',
  'morena@gmail.com',
  'mattiam@gmail.com',
  'simone@gmail.com',
  'mariano@gmail.com',
  'vitali@gmail.com',
  'gianluca@gmail.com',
  'giuseppe@gmail.com',
  'salvatore@gmail.com',
  'giada@gmail.com',
  'giuliasa@gmail.com',
  'benjamins@gmail.com',
  'giuliaso@gmail.com',
  'lucas@gmail.com',
  'davide@gmail.com',
  'luigi@gmail.com',
  'lucav@gmail.com'
];

const mailInserita = prompt('Inserisci la tua mail');
let mailCorretta = false;
// usiamo una variabile di appoggio

// alla fine del ciclo (dove??) verifichiamo il valore di variabile di appoggio e stampiamo la frase corrispodnente

for (let i = 0; i < mail.length; i++) {

  // abbiamo la i (0, 1, 2, 3, ...)

  // recuperiamo dall'array l'eleemnto nella posizione di i
  const mailPresente = mail[i];
  
  // l'lemento recuperato è uguale a quello ricercato?
  if (mailInserita === mailPresente) {
    mailCorretta = true;
  };
  
};

if (mailCorretta === true) {
  console.log('è presente');
  document.getElementById(`mail`).innerHTML = `La tua mail è presente nella lista, quindi puoi accedere al contenuto.`;
}else{
  console.log('non è presente');
  document.getElementById(`mail`).innerHTML = `La tua mail non è presente nella lista, quindi non puoi accedere al contenuto.`;
};

