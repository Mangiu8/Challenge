/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']

for(i=0; i < pets.length; i++){
  console.log(pets[i]);
}


/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
var ordinato = pets.sort();

for(i=0; i < pets.length; i++){
  console.log(pets[i]);
}


/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

 var invertito = pets.reverse();

for(i=0; i < pets.length; i++){
  console.log(pets[i]);
}

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
var removed = pets.shift();
pets.push('redfish');                // visto che ho usato .reverse il primo della lista e' diventato redfish cosi ho cambiato di posizione a lui
                                     // altrimenti dog sarebbe comparso 2 volte
for(i=0; i < pets.length; i++){
  console.log(pets[i]);
}

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]
cars[0].licensePlate = 'AA123BC';
cars[1].licensePlate = 'GG088NB';
cars[2].licensePlate = 'OU678TR';
console.log(cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
cars.push({
  brand: 'Ford',
  model: 'Mustang boss 429',
  color: 'black',
  trims: ['power', 'style', 'elegance'],
  licensePlate: 'SA098NO',
});

 let trims =[['titanium', 'st', 'active'],['allure', 'GT'],['life', 'style', 'r-line'],['power', 'style', 'elegance']];
 trims.forEach(trims => {
  trims.pop();
 });

console.log(trims);
/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = []

justTrims.push('titanium', 'allure', 'life','power');
console.log(justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

for (var i = 0; i < cars.length; i++) {
  var color = cars[i].color; 
  var firstLetter = color.charAt(0); 

  if (firstLetter === "b") {
      console.log("Fizz");
  } else {
      console.log("Buzz");
  }
}


/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
 const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
 ]

 let index = 0;

while (index < numericArray.length && numericArray[index] !== 32) {
  console.log(numericArray[index]);
  index++;
}
 
/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd']
const alfabeto = [];

for (i = 0; i < charactersArray.length; i++){
  const lettera = charactersArray[i];

switch(lettera){
  case 'a' : numero = 1;
  break;
  case 'b' : numero = 2;
  break;
  case 'c': numero = 3;  
  break;
  case 'd': numero = 4;
  break;
  case 'e': numero = 5;
  break;
  case 'f' : numero = 6;
  break;
  case 'g' : numero = 7;
  break;
  case 'h' : numero = 8;
  break;
  case 'i' : numero = 9;
  break;
  case 'l' : numero = 10;
  break;
  case 'm' : numero = 11;
  break;
  case 'n' : numero = 12;
  break;
  case 'o' : numero = 13;
  break;
  case 'p' : numero = 14;
  break;
  case 'q' : numero = 15;
  break;
  case 'r' : numero = 16;
  break;
  case 's' : numero = 17;
  break;
  case 't' : numero = 18;
  break;
  case 'u' : numero = 19;
  break;
  case 'v' : numero = 20;
  break;
  case 'z' : numero = 21;
  break;
  }
  alfabeto.push(numero);
}

console.log(alfabeto)