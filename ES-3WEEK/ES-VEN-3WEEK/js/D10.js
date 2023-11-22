/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
const sum = function (...iMieiNumeri) {
     let total = 0;
  for(const arg of iMieiNumeri){
    total += arg;
}
return total;
}
console.log('Esercizio A = ' + sum(10,20));

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
const random = function () {
  numeroRandom = Math.floor(Math.random() * 20 + 1)
  return numeroRandom
}
console.log('Esercizio B = ' + random())

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
const me = {
  name: "Antonio",
  surname: "Marucci",
  age: 25,
}
console.log('Esercizio C')
console.log(me)

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
delete me.age;
console.log('Esercizio D')
console.log(me)

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
me.skills = ["Html", "CSS", "Javascript assolutamente no"]
console.log('Esercizio E')
console.log(me)
 
/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
me.skills.push("So fare bene il caffe")

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
me.skills.pop()
// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
const dice = function () {
  dado = Math.floor(Math.random() * 6 + 1)
  return dado
}
console.log('Esercizio 1 = ' + dice())

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
const whoIsBigger = function() {
  const n1 = 262310974 ;
  const n2 = 57420455 ;
  if (n1 > n2){
    console.log("n1 e' maggiore di n2")
  } else if (n2 > n1) {
    console.log("n2 e' maggiore di n1")
  } else {
    console.log('sono uguali')
  }
}
console.log("Esercizio 2")
whoIsBigger()
/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
const splitMe = function() {
  const string = 'un giorno voglio creare videogiochi'
  const ritorna = string.split(' ')
  return ritorna
}
console.log('Esercizio 3 = '  + splitMe())


/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
const deleteOne = function () {
  const stringa = 'CIAO A TUTTI!'
  if(true){
    return stringa.slice(1)
  } else {
    return stringa.slice(0, -1)
  }
}
console.log('Esercizio 4 = ' + deleteOne())
/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
const onlyLetters = function() {
  const string = 'ho 2 cani e 7 topi'
  const ritorna = string.replace(/\d/g,'')
  return ritorna
}
console.log('Esercizio 5 = '  + onlyLetters())

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
const isThisAnEmail = function (email) {
  const email1 = 'antonio@gmail.it'
  const check = '@'
  const check2 = '.'
  if(email1.includes(check)){
    return true
  } else if (email1.includes(check2)){
    return true
  } else {
    return false
  }
}
console.log('Esercizio 6 = ' + isThisAnEmail())
/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
const whatDayIsIt = function (){
   const oggi = new Date()
   let giorniSettimana = ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'];
   let oggiIndex = oggi.getDay();
   return giorniSettimana[oggiIndex];
}
console.log('Esercizio 7 = ' + whatDayIsIt())
/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
let rollsResult = rollTheDices(3)

function rollTheDices(numberOfRolls) {
  let result = {
    sum: 0,
    values: []
  };

  for (let i = 0; i < numberOfRolls; i++) {
    let currentValue = dice();
    result.sum += currentValue;
    result.values.push(currentValue);
  }

  return result;
}
console.log("Esercizio 8 = Somma: " + rollsResult.sum);
console.log("Esercizio 8 = Valori: " + rollsResult.values.join(","));
/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
let startDate = new Date("10-11-2018")
let dayPassed = howManyDays(startDate)

function howManyDays(startDate){
  let currentData = new Date();
  let timeDifference = currentData - startDate;
  let daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
  return daysDifference
}
console.log("Esercizio 9 = Sono passati " + dayPassed + " giorni dalla data di inizio.");

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
const result = isTodayMyBirthday();
function isTodayMyBirthday() {
  let giornoCorrente = new Date();

  let birthday = new Date(giornoCorrente.getFullYear(), 8, 8);

  return (
    giornoCorrente.getDate() === birthday.getDate() &&
    giornoCorrente.getMonth() === birthday.getMonth() &&
    giornoCorrente.getFullYear() === birthday.getFullYear()
  );
}
if (result) {
  console.log("Esercizio 10 = Buon compleanno!");
} else {
  console.log("Esercizio 10 = Oggi non e' il tuo compleanno.");
}

// Arrays & Oggetti
const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
const miaMoglie = {nome:'Antonella', cognome: 'Facchiano', tipo: 'inesistente'}
const string = 'tipo';

function deleteProp (miaMoglie,string){
   delete miaMoglie[string];
   return miaMoglie;
}
console.log('Esercizio 11')
console.log(deleteProp(miaMoglie,string))
/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
let filmPiuNuovo = newestMovie(movies)

function newestMovie(movies){
  let filmPiuNuovo = null;

  movies.forEach(function(film){
    if (!filmPiuNuovo || film.Year > filmPiuNuovo.Year){
      filmPiuNuovo = film;
    }
  });
  return filmPiuNuovo;
}
console.log('Esercizio 12')
console.log(filmPiuNuovo);

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
const countMovies = function(){
  return  movies.length
}
console.log("Esercizio 13 = " + countMovies())

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
let onlyTheYears = movies.map(function(element){
  return element.Year;
})
console.log("Esercizio 14")
console.log(onlyTheYears)

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
let onlyInLastMillennium = movies.filter(function(element){
  return element.Year < 2000;
});
console.log("Esercizio 15")
console.log(onlyInLastMillennium);

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

const sumAllTheYears = (array) => {
  return array.reduce((acc, curr) => acc + parseInt(curr.Year), 0)
}

console.log("Esercizio 16")
console.log(sumAllTheYears(movies));

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
let searchByTitle = movies.find(function(element){
  return element.Title == 'Avengers: Endgame';
})
console.log("Esercizio 17")
console.log(searchByTitle);

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
function searchAndDivide(search){
  let match = [];
  let unmatch = [];

  for(let i = 0; i <movies.length; i++){
      let titolo = movies[i].Title;
      let result = movies[i]

      if (titolo.includes(search)){
        match.push(result)
      }
      else {
        unmatch.push(result)
      }
  }
  let object = {Match: match, Unmatch: unmatch}
  return object;
}
console.log('Esercizio 18')
console.log(searchAndDivide('Avengers'));

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
const removeIndex = function() {
  const moviesCastrato = movies.slice(1)
  return moviesCastrato
}
console.log("Esercizio 19")
console.log(removeIndex())
// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
const elementoContainer = function() {
  let container = document.getElementById('container');
}
/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
const ogniTd = function(){
  let iMieiTd = document.querySelectorAll('td')
}
/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
const stampaOgniTd = function(){
  let iMieiTdStamapati = document.querySelectorAll('td')
  console.log(iMieiTdStamapati)
}
/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
let links = document.querySelectorAll('a');
      links.forEach((link) => {
      link.style.backgroundColor = "yellow"; 
});

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
const myLI = function(){
    let myUl = document.getElementById('myList');
    let newLi = document.createElement('li');
    newLi.innerHTML = ' ';
    myUl.appendChild(newLi)
}
/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
function myFunction(){
  const myList = document.getElementById("myList");
  myList.removeChild();
}
/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
function myFunction2(){
  const allTr = document.querySelectorAll('tr');
  allTr.classList.add('.test');
}
// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/
function halfTree (five){
  for(var y = 1; y <= five; y++){
    var line = '';
    var line = '*'
    console.log(line);
  }
}
halfTree(5)

// non funziona e non capisco perche` quindi faccio cosi :)
var messaggio = 
`*
**
***
*****
******`
console.log(messaggio)
/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/
function tree(height) {
  for (var i = 1; i <= height; i++) {
    var spaces = ' '.repeat(height - i);
    var stars = '*'.repeat(2 * i - 1);
    console.log(spaces + stars);
  }
}

tree(5);

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/



