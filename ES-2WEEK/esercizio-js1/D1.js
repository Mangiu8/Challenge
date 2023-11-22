/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* I pricicpali datatype sono i dati primiviti e i dati complessi.
   I dati primitivi si racchiudoni in stringhe, numeri, booleani, null e undefined.
   Le stringhe sono delle parole che devono essere racchiuse in degli apici che possono essere singoli o doppi,
   l'importante e' che l'apice di apertura e quello di chiusura siano uguali.
   I numeri si scrvono senza apici e possono essere interi, decimali o negativi.
   I dati booleani si limitano a dire se un'affermazione e' vera o falsa
   I dati null indicano dei dati appunto nulli, che non sono ne stringhe ne numeri
   I dati undefined rappresenta un dato che non esiste, non somiglia a nessun tipo di dato visto prima

   I dati complessi invece comprendono gli oggetti 
*/

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

 var name = 'Antonio';
console.log(name);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

var x = 12;
var y = 20;
console.log((x += y));

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

var x = 12;
console.log (x)

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/
var name = 'Marucci';
console.log(name);
// const nome = 'Antonio';
// nome = 'Antonio';
// console.log(nome);

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

console.log(4 - x )

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/
var name1 = 'john';
var name2 = 'John';
console.log(name1 === name2);
{
let name1 = 'john';
let name2 = 'John'.toLowerCase();
console.log(name1 === name2);
}
