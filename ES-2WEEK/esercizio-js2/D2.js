/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

var num1 = 20;
var num2 = 50;
if (num1 < num2){
  console.log("num2 e' piu grande di num1");
} 

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

var num3 = 2;
if (num3 !== 5){
console.log('not equal');
}
/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

var num6 = 25;
if (num6 % 5 ==0){
  console.log("divisibile per 5");
} else {
  console.log("non divisibile per 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

let num4 = 6;
let num5 = 16;
console.log((num4 += 2));        
console.log((num5 -= num4));

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
  // dichiaro 3 varibili
  totale, costo spedizione , pagamento=totale -> if 
*/

const spedizione = 10;
var tot_carrello = 30;

if (tot_carrello <= 50){
 var pagamento = tot_carrello + spedizione;
} else {
 var pagamento = tot_carrello
} 
console.log("importo " + pagamento);
 


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

const spedizione2 = 10;
var tot_carrello = 64;

if (tot_carrello * 0.8 <= 50){
 var pagamento = tot_carrello + spedizione;
} else {
 var pagamento = tot_carrello
} 
console.log("importo " + pagamento);

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

var num7 = 8;
var num8 = 9;
var num9 = 98;
if (num7 > num8){
  console.log("num7 e' maggiore di num8 e num9");
} else if (num8 > num9){
  console.log("num8 e' maggiore di num7 e num9");
} else {
  console.log("num9 e' maggiore di num7 e num8");
}
/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

var num7 = 8;
var num8 = 9;
var num9 = 7;
if (num7 > num8){
  console.log(typeof false);
} else if (num8 > num9){
  console.log(typeof 98);
} else {
  console.log(typeof 'sono una stringa');
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
var x = 8;

if (x%2 == 0) {
  console.log("e' pari");
} else if (x%2 == 1) {
 console.log("e' dispari");
} else {
  console.log("non e' un numero");
}


// ESERCIZIO 10
 // Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  
 let val = 3;
  if (val < 10 && ( val >= 5 )) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }


/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
me.city = 'Toronto';

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName;

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

me.skills.pop();

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

let numeri = []
numeri.push (1)
numeri.push (2)
numeri.push (3)
numeri.push (4)
numeri.push (5)
numeri.push (6)
numeri.push (7)
numeri.push (8)
numeri.push (9)
numeri.push (10)

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/
numeri.pop(10)
numeri.push(100)
