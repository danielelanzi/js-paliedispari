// <===========================INIZIO========================>
// Scrivi una funzione per capire se la parola è palindroma

var palindroma = [''];
do {
  var parola = prompt('Verifica se la parola è un palindroma');
} while (parola.length == 0 );

for (var i = parola.length-1; i >= 0; i--) {
  palindroma[0] += parola[i];
}
if (palindroma[0] == parola) {
  console.log('Hai inserito una parola palindroma: ' + parola);
  alert('Hai inserito una parola palindroma');
} else {
  console.log('Non hai inserito una parola palindroma: ' + parola);
  alert('Non hai inserito una parola palindroma');
}

// <===========================FINE========================>
