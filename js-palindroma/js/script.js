// <===========================INIZIO========================>
// Scrivi una funzione per capire se la parola è palindroma


do {
  var parola = prompt('Verifica se la parola è un palindroma');
} while (parola.length == 0 );

var parolaTurn = wordReverse(parola);

if (parolaTurn == parola) {
  console.log('Hai inserito una parola palindroma: ' + parola);
  alert('Hai inserito una parola palindroma');
} else {
  console.log('Non hai inserito una parola palindroma: ' + parola);
  alert('Non hai inserito una parola palindroma');
}

// <===========================FINE========================>

var parola = prompt('Verifica se la parola è un palindroma');
var parolaTurn = wordReverse(parola);

if (parolaTurn == parola) {
  console.log('Hai inserito una parola palindroma: ' + parola);
  alert('Hai inserito una parola palindroma');
} else {
  console.log('Non hai inserito una parola palindroma: ' + parola);
  alert('Non hai inserito una parola palindroma');
};

// Funzioni
function wordReverse(parola) {
  var parolaReverse = '';
  for (var i = parola.length -1; i >= 0; i--) {
    parolaReverse += parola[i];
  }
  return parolaReverse
};
