// <===========================INIZIO========================>
// Gioco Pari e dispari:
// L’utente sceglie pari o dispari e un numero da 1 a 5.
// Generiamo un numero random (sempre da 1
// a 5) per il computer.
// Sommiamo i due numeri e dichiariamo chi ha
// vinto (controlliamo se la somma da pari o dispari).

var numeroPc = parseInt(getRandomNumber(0,5));
console.log('Numero casuale da 1 a 5 generato dal pc: ' + numeroPc);

if (confirm('Pronto per giocare?')) {
  do {
    // Ciclo scelta pari e dispari
    do {
      var sceltaUtente = prompt('Scegli tra \'pari\' o \'dispari\'').toLowerCase();
      if (sceltaUtente != 'pari' && sceltaUtente != 'dispari') {
        alert('Devi inserire pari o dispari')
      }
    } while (
      (sceltaUtente != 'pari' && sceltaUtente != 'dispari')
    );

    // Ciclo scelta numero da 1 a 5
    do {
      var numeroUtente = parseInt(prompt('Scegli un numero da 1 a 5'));
      if (numeroUtente > 5 || numeroUtente < 1 || isNaN(numeroUtente))  {
        alert('Devi inserire un numero da 1 a 5')
      }
    } while (numeroUtente > 5 || numeroUtente < 1 || isNaN(numeroUtente));
  } while (
    (sceltaUtente != 'pari' && sceltaUtente != 'dispari') ||
    isNaN(numeroUtente)
  );

  // Ciclo numero random e risultato
  do {
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
    };
  } while ((sceltaUtente != 'pari' && sceltaUtente != 'dispari') ||
  isNaN(numeroUtente));

} else {
  alert('Hai annullato il gioco, ricarica la pagina per giocare di nuovo');
};


// Funzioni
// Numero random
function getRandomNumber(min,max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  var random = Math.floor(Math.random() * (max - min + 1)) + min;

  return random;
};

// Ricarica pagina
function ricaricaPage() {
  location.replace('file:///Users/danielelanzi/Documents/boolean-courses/consegna-esercizi/js-paliedispari/js-pari-dispari/index.html');
};
// <===========================FINE========================>
