// <===========================INIZIO========================>
// Gioco Pari e dispari:
// L’utente sceglie pari o dispari e un numero da 1 a 5.
// Generiamo un numero random (sempre da 1
// a 5) per il computer.
// Sommiamo i due numeri e dichiariamo chi ha
// vinto (controlliamo se la somma da pari o dispari).

if (confirm('Pronto per giocare?')) {
  do {
    var sceltaUtente = prompt('Scegli tra \'pari\' o \'dispari\'').toLowerCase();
  } while (sceltaUtente != 'pari' && sceltaUtente != 'dispari');
}else {
  alert('Hai annullato il gioco, ricarica la pagina per giocare di nuovo');
};
do {
  var numeroUtente = parseInt(prompt('Scegli un numero da 1 a 5'));
} while (
  isNaN(numeroUtente)
);

var numeroPc = parseInt(getRandomNumber(0,5));
console.log('Numero casuale da 1 a 5 generato dal pc: ' + numeroPc);

if ((numeroUtente + numeroPc) % 2 == 0 && sceltaUtente == 'pari') {
  console.log('Somma dei numeri: ' + (numeroUtente + numeroPc));
  console.log('Hai Vinto!');
  alert('Hai Vinto!')
} else if ((numeroUtente + numeroPc) % 2 != 0 && sceltaUtente == 'dispari') {
  console.log('Somma dei numeri: ' + (numeroUtente + numeroPc));
  console.log('Hai Vinto!');
  alert('Hai Vinto!')
} else {
  console.log('Somma dei numeri: ' + (numeroUtente + numeroPc));
  console.log('Hai Perso!');
  alert('Hai Perso!')
}

// Funzioni
function getRandomNumber(min,max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  var random = Math.floor(Math.random() * (max - min + 1)) + min;

  return random;
};

function ricaricaPage() {
  location.replace('file:///Users/danielelanzi/Documents/boolean-courses/consegna-esercizi/js-paliedispari/js-pari-dispari/index.html');
};
// <===========================FINE========================>
