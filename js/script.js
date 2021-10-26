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


for (let i = 0; i < mail.length; i++) {
  const mailPresente = mail[i];
  
  if (mailInserita !== mailPresente) {
    console.log('Mail non presente');
  } 
  else {
    console.log('Mail presente');
  }

}