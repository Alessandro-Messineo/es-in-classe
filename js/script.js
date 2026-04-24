// Crea un array di oggetti che rappresentano delle persone. Ogni persona ha un nome, un cognome e un’età.
// Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.



// const persone = [
//   { nome: "Luca", cognome: "Rossi", eta: 30 },
//   { nome: "Maria", cognome: "Bianchi", eta: 10 },
//   { nome: "Giovanni", cognome: "Verdi", eta: 40 },
//   { nome: "Anna", cognome: "Neri", eta: 35 },
//   { nome: "Marco", cognome: "Ferrari", eta: 28 },
//   { nome: "Chiara", cognome: "Moretti", eta: 12 },
//   { nome: "Stefano", cognome: "Ricci", eta: 7 },
//   { nome: "Elena", cognome: "Romano", eta: 17 },
//   { nome: "Alessandro", cognome: "Greco", eta: 45 },
//   { nome: "Francesca", cognome: "Galli", eta: 16 }
// ];

// const guidare = persone.map(persona => {
//   let frase ="";
//   if (persona.eta >= 18) {
//     frase =  `${persona.nome} ${persona.cognome} può guidare.`;
//   } else {
//     frase = `${persona.nome} ${persona.cognome} non può guidare.`;
//   }
//   return frase;
// });

// const persona= persone.map( p => {
//   if( p.eta >= 18){
//     return "non puoi guidare";
//   }else{
//     return "puoi guidare"
//   }}
// )

// console.log(guidare);


// 1 Somma di due numeri
// Chiedi all’utente due numeri con prompt e stampa in console la loro somma.

// let a = parseInt(prompt("Inserisci un numero"));
// let b = parseInt(prompt("Inserisci un numero"));

// let sum= a+b;

// console.log("la somma e: " + sum);

// 2 Maggiore di tre numeri
// Chiedi tre numeri con prompt e stampa quale è il maggiore (gestisci anche il caso in cui due o tre siano uguali).

// let a =parseInt(prompt("Inserisci un numero"));
// let b =parseInt(prompt("Inserisci un numero"));
// let c =parseInt(prompt("Inserisci un numero"));

// if(a > b && a >c){
//   console.log("a: "+a+"e maggiore");

// }else if(b > a && b>c){
// console.log("b: "+b+"e maggiore");
// }else if(a===b && b===c){
//   console.log(" i numeri sono uguali");
// }else{
//   console.log("c: "+c+"e maggiore");
// }

// 3 Conta le vocali
// Chiedi una stringa all’utente.
// Stampa in console quante vocali (a, e, i, o, u) contiene (ignora maiuscole/minuscole).

// let parola =prompt("Inserisci una parola");

// let vocali = ["a" , "e" , "i" , "o" ,"u"];

// let num = 0;
// for(let i=0; i< parola.length; i++){
//   if(vocali.includes(parola[i])){
//     num++;
//   }
// }

// console.log(num);

// 4 Inverti una stringa
// Chiedi una parola all’utente e stampa la stessa parola invertita (es. "ciao" → "oaic"), usando un ciclo o metodi degli array.

// let parola =prompt("Inserisci una parola");

// let alorap ="";

// for (let index = parola.length -1; index >= 0; index--) {

//   alorap = alorap + parola[index];

// }

// console.log(alorap);

// 5 Numeri pari da 1 a N
// Chiedi un numero N e stampa tutti i numeri pari da 1 a N inclusi, uno per riga.

// let a = parseInt(prompt("Inserisci un numero"));

// for (let index = 0; index <= a; index++) {
//   if(index%2 === 0){
//     console.log(index);
//   }
// }

// 6 Somma elementi di un array
// Dichiara un array di numeri a tua scelta.
// Calcola e stampa la somma di tutti gli elementi usando un for o reduce.

// let nums = [1,2,3,4,5];
// let a =0;
// for (let index = 0; index < nums.length; index++) {
//   a=a+nums[index];
// }

// console.log(a);


// 7 Filtra stringhe corte
// Dichiara un array di stringhe (almeno 5 parole).
// Crea un nuovo array con solo le parole lunghe almeno 5 caratteri e stampalo.


// let parole = ["bentornato", "ciao", "piede", "calzino", "suca"];

// const a= parole.filter(e => e.length >= 5);

// for (let index = 0; index < parole.length; index++) {
//   if(parole[index].length >= 5){
//     console.log(parole[index]);

//   }

// }
// console.log(a);


// 8 Frequenza delle lettere
// Chiedi una parola all’utente.
// Crea un oggetto dove le chiavi sono le lettere e i valori sono quante volte compaiono (es. "anna" → { a: 2, n: 2 }) e stampalo.

// let a = prompt("Inserisci un numero");

// for (let index = 0; index <= a.length; index++) {

// }

// let c = {};

// let b = a.split("");



// console.log(b);
// console.log(c);

// let input = prompt("Inserisci una parola ");
// let parola = {};

// for (let i = 0; i < input.length; i++) {
//   let lettera = input[i];
//   if (parola[lettera]) {
//     parola[lettera]++;
//   } else {
//     parola[lettera] = 1;
//   }
// }

// console.log(parola);

// 9 Somma prezzi prodotti
// Hai un array di oggetti:

// js
// const products = [
//   { name: "Mela", price: 1 },
//   { name: "Pera", price: 2 },
//   { name: "Banana", price: 3 },
// ];
// Calcola e stampa la somma totale dei prezzi.



// let sum= 0;
// for (let index = 0; index < products.length; index++) {
//   sum = sum + products[index].price;
// }

// console.log(sum);


// let a = products.map(e => sum = sum + e.price);

// console.log(sum);

// 10 Trova l’utente per email
// Hai un array:

// js
// const users = [
//   { name: "Teo", email: "teo@example.com" },
//   { name: "Laura", email: "laura@example.com" },
//   { name: "Luca", email: "luca@example.com" },
// ];
// Chiedi all’utente una email con prompt.
// Se esiste un utente con quella email, stampa "Trovato: NOME", altrimenti "Nessun utente trovato".

// let a = prompt("Inserisci un numero");

// let b = users.map(e =>{
// if (e.email.includes(a)) {
//   return console.log("trovato:" + e.name);
// } else {
//   return console.log("non trovato");
// }}
// );


// 11 Filtra prodotti economici
// Hai questo array:

// js
// const products = [
//   { name: "Mela", price: 1 },
//   { name: "Pera", price: 2 },
//   { name: "Banana", price: 3 },
//   { name: "Ananas", price: 5 },
// ];
// Crea un nuovo array che contenga solo i prodotti con price minore o uguale a 2.
// Stampa il nuovo array.

// let minprice = products.filter(e => e.price <=2);

// console.log(minprice);



// 12 Lista nomi utenti attivi
// Hai questo array:

// js
// const users = [
//   { name: "Teo", active: true },
//   { name: "Laura", active: false },
//   { name: "Luca", active: true },
//   { name: "Gianni", active: false },
// ];
// Stampa in console solo i nomi degli utenti con active: true.
// La stampa deve essere in una singola stringa, tipo "Teo, Luca".

// let gg = users.filter(e => e.active === true);

// console.log(gg);

// let a = gg.name.join("");

// console.log(a);


// 13 Calcolo totale carrello
// Hai questo carrello:

// js
// const cart = [
//   { name: "Mouse", price: 20, quantity: 2 },
//   { name: "Tastiera", price: 50, quantity: 1 },
//   { name: "Monitor", price: 150, quantity: 1 },
// ];
// Calcola e stampa il totale del carrello, cioè somma di price * quantity per ogni prodotto.
// let sum = 0;
// let a = cart.map(e => sum = sum + (e.price * e.quantity));

// console.log(sum);


// 14 Trova il libro più lungo
// Hai questo array:

// js
// const books = [
//   { title: "Libro A", pages: 120 },
//   { title: "Libro B", pages: 300 },
//   { title: "Libro C", pages: 220 },
// ];
// Trova il libro con più pagine e stampa in console:
// "Il libro più lungo è: TITOLO (PAGINE pagine)".

// let a = books.map.find(e => e.pages)

// let a = books[0];
// for (let index = 0; index < books.length; index++) {
//   if(a.pages < books[index].pages){
//     a = books[index];
//   }
// }

// console.log(a);


// 15 Raggruppa per ruolo
// Hai questo array:

// js
      // const people = [
      //   { name: "Teo", role: "admin" },
      //   { name: "Laura", role: "user" },
      //   { name: "Luca", role: "user" },
      //   { name: "Gianni", role: "editor" },
      //   { name: "Marco", role: "admin" },
      // ];
// Crea un oggetto byRole in cui le chiavi sono i ruoli (admin, user, editor) e i valori sono array di nomi con quel ruolo, ad esempio:

// js
// {
//   admin: ["Teo", "Marco"],
//   user: ["Laura", "Luca"],
//   editor: ["Gianni"]
// }
// Stampa l’oggetto risultante.


// let byrole = {admin: [], user:[], editor:[]}
// for (let index = 0; index < people.length; index++) {

//   if(people[index].role === "admin"){
//     byrole.admin.push(people[index].name);
//   }else if(people[index].role === "user"){
//     byrole["user"].push(people[index].name);
//   }else{
//     byrole["editor"].push(people[index].name);
//   }
// }

// console.log(byrole);

// const users = [
//   { name: 'Luca', age: 22, active: true, email: 'luca@email.com' },
//   { name: 'Marta', age: 35, active: false, email: 'marta@email.com' },
//   { name: 'Giovanni', age: 28, active: true, email: 'gio@email.com' },
//   { name: 'Anna', age: 19, active: true, email: null },
//   { name: 'Francesca', age: 42, active: false, email: 'francesca@email.com' },
// ];

// let a = users[0];
// for (let index = 0; index < users.length; index++) {
// if(a.age <= users[index].age ){
//   a = users[index]
// }
// }

// console.log(a);



// const numbers = [12, 5, 8, 130, 44, 7];
// const text = "JavaScript è incredibilmente potente e flessibile";

// console.log(numbers[2]);

// numbers.push(15);

// console.log(numbers);

// console.log(numbers.length);

// let a = numbers.map(e => e *2);
// console.log(a);


// let b = users.filter(e => e.active === true);

// console.log(b);

// let c = users.find(e => e.age > 35);
// console.log(c);

// users.push({name: 'alex', age: 24, actrive: false, email:'suca'});

// console.log(users);

// let person = {name: 'alex', age: 24, actrive: false, email:'suca'};

// person['city']= "rome";

// console.log(person);

// delete person.age;

// console.log(person);






// for (let index = 1; index <= 100; index++) {
// if(index%3 === 0 && index%5 === 0){
//     console.log("Suca");
    
//   }else 
//   if (index%3 === 0) {
//     console.log("Fizz");
    
//   }else if(index%5 === 0){
//     console.log("Buzz");
    
//   }else{
//     console.log(index);
    
//   }
// }


