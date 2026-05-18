// =======================
// DATI DI BASE
// =======================

const employees = [
    { name: 'Alex', age: 21, onHoliday: true },
    { name: 'Susan', age: 28, onHoliday: false },
    { name: 'Jim', age: 56, onHoliday: true },
    { name: 'Kate', age: 55, onHoliday: true },
    { name: 'Anne', age: 37, onHoliday: false },
];

const numbers = [3, 7, 10, 25, 40, 2];
const message = "JavaScript è fantastico";


// =======================
// ARRAY & OGGETTI (1–25)
// =======================

// 1) Stampa tutti i nomi

// const a = employees.map(e => e.name)
// console.log(a);

// 2) Stampa solo chi è in ferie

// const a = employees.filter(e => e.onHoliday === true);
// console.log(a);

// 3) Stampa i nomi di chi è in ferie

// let a =[];

// for(let i =0; i<employees.length; i++){
//   if(employees[i].onHoliday === true){
//     a.push(employees[i].name);
//   }
// }

// console.log(a);


// 4) Trova il primo over 50

// const a = employees.find(e => e.age>50);

// console.log(a);

// 5) Verifica se tutti sono maggiorenni

// const allAdults = employees.every(emp => emp.age >= 18);

// console.log(allAdults); 

// 6) Verifica se almeno uno è in ferie

// const a = employees.some(e => e.onHoliday);

// console.log(a);

// 7) Ordina per età crescente
// 8) Ordina per età decrescente
// 9) Calcola età media

// let totalAge = 0;

// for (let i = 0; i < employees.length; i++) {
//     totalAge += employees[i].age;
// }

// const averageAge = totalAge / employees.length;

// console.log(averageAge);

// 10) Calcola somma delle età

// let totalAge = 0;

// for (const emp of employees) {
//     totalAge += emp.age;
// }

// console.log(totalAge);

// 11) Ritorna un array solo con le età

// const ages = employees.map(emp => emp.age);

// console.log(ages);

// 12) Aggiungi una proprietà "city" a tutti (senza mutare)
// const a = employees.map( e => ({...e, city: "palemmmu"}));

// 13) Conta quanti sono in ferie

// let count = 0;

// for (const emp of employees) {
//     if (emp.onHoliday) {
//         count++;
//     }
// }

// console.log(count);

// 14) Rimuovi chi ha meno di 30 anni

// const over30 = employees.filter(emp => emp.age >= 30);

// console.log(over30);

// 15) Trova l’employee più giovane
// 16) Trova l’employee più anziano
// 17) Verifica se esiste un employee di nome "Jim"
// 18) Crea un array di boolean solo con onHoliday
// 19) Trasforma name in uppercase
// const a = employees.map( e => e.name.toUpperCase());

// 20) Ordina alfabeticamente per nome
// 21) Ritorna solo name e age
// const a = employees.map( e => ({name: e.name, age: e.age}))

// 22) Elimina onHoliday da ogni oggetto (copia)
// const a = employees.map( e => {
//   const {onHoliday, ...rest} =e
//   return rest;
//   })

// 23) Trova l’indice di "Susan"
// const a = employees.map(e => e.name).indexOf("Susan");

// 24) Unisci tutti i nomi in una stringa
// const a = employees.map(e => e.name).join(',')

// 25) Inverti l’array employees
// const a = employees.map(e => e).reverse()


// =======================
// ARRAY SEMPLICE (numbers) (26–45)
// =======================

// 26) Stampa tutti i numeri
// console.log(numbers);

// 27) Filtra solo numeri pari
// const a = numbers.filter(e => e%2 === 0)

// 28) Filtra solo numeri dispari
// const a = numbers.filter(e => e%2 === 1)

// 29) Moltiplica ogni numero per 2
// const a = numbers.map(e => e*2)

// 30) Trova il numero massimo
// let max = numbers[0];

// for(let i=1 ; i < numbers.length; i++){
//   if(numbers[i] > max){
//     max = numbers[i];
//   }
// }

// console.log(max);

// 31) Trova il numero minimo
// let min = numbers[0];

// for(let i=1 ; i < numbers.length; i++){
//   if(numbers[i] < min){
//     min = numbers[i];
//   }
// }

// console.log(min);

// 32) Calcola la somma
// let sum = 0;

// for(let i=0 ; i < numbers.length; i++){
//   sum = sum + numbers[i];
// }

// console.log(sum);

// 33) Calcola la media
// let media = 0;
// let sum =0;
// for(let i=0 ; i < numbers.length; i++){
//   sum = sum + numbers[i];
// }

// media = sum / numbers.length;

// console.log(media);

// 34) Ordina crescente
// const a = numbers.sort((a,b) => a-b)

// 35) Ordina decrescente
// const a = numbers.sort((a,b) => b-a)

// 36) Verifica se tutti sono > 0
// const a = numbers.map(e => e> 0)

// 37) Verifica se esiste il numero 10
// const a = numbers.find(e => e === 10 )

// 38) Rimuovi i numeri < 10
// const a = numbers.filter( e => e>10)

// 39) Trova l’indice del numero 25
// const a = numbers.indexOf(25)

// 40) Trasforma in stringhe
// const a = numbers.join(',')

// 41) Inverti l’array
// const a = numbers.reverse()

// 42) Clona l’array
// const a = [...numbers]

// 43) Aggiungi un numero in coda (copia)
// numbers.push(363636363)

// 44) Rimuovi l’ultimo numero (copia)
// numbers.pop()

// 45) Somma solo i numeri pari
// let sum = 0;

// for(let i=0 ; i < numbers.length; i++){
//   if(numbers[i]%2 ===0){
//   sum = sum + numbers[i];
//   }
// }

// console.log(sum);


// =======================
// STRINGHE (message) (46–65)
// =======================

// 46) Stampa la stringa

// console.log(message);

// 47) Trasforma in maiuscolo

// console.log(message.toUpperCase());

// 48) Trasforma in minuscolo

// console.log(message.toLowerCase());

// 49) Conta i caratteri (spazi inclusi)

// console.log(message.length);

// 50) Conta i caratteri (senza spazi)

// const a = message.replace(/\s/g, "");

// const length = a.length;

// console.log(length);

// 51) Verifica se contiene "JavaScript"

// console.log(message.includes("JavaScript"));

// 52) Sostituisci "fantastico" con "potente"

// a = message.replace("fantastico", "potente");

// console.log(a);

// 53) Estrai la parola "JavaScript"

// const a = message.split(" ")[0];

// console.log(a);

// 54) Dividi la stringa in parole

// const parole = message.split(" ");

// console.log(parole);

// 55) Unisci le parole con "-"

// const risultato = message.split(" ").join("-");

// console.log(risultato); 

// 56) Inverti la stringa

// const a = message.split('').reverse().join('');

// console.log(a);

// 57) Ripeti la stringa 3 volte

// const a = message.repeat(3);

// console.log(a);

// 58) Controlla se inizia con "Java"

// const a = message.startsWith("Java");

// console.log(a);

// 59) Controlla se finisce con "co"

// console.log(message.endsWith("co"));

// 60) Rimuovi gli spazi iniziali e finali

// console.log(message.trim());

// 61) Conta quante volte appare la lettera "a"

// const countA = (message.match(/a/g) || []).length;
// console.log(countA);

// 62) Trasforma solo la prima lettera in maiuscolo

// const firstUpper = message.charAt(0).toUpperCase() + message.slice(1);

// console.log(firstUpper);

// 63) Ritorna la stringa come array di caratteri

// console.log(message.split(""));

// 64) Sostituisci tutte le "a" con "*"

// console.log(message.replaceAll("a", "*"));

// 65) Tronca la stringa a 10 caratteri

// console.log(message.slice(0, 10));


// =======================
// FUNZIONI (66–80)
// =======================

// 66) Funzione che somma due numeri

// function somma(a,b) {
//     return a+b;
// }

// console.log(somma(5,3));

// 67) Funzione che sottrae due numeri

// function sottrazione(a,b) {
//     return a-b;
// }

// console.log(sottrazione(5,3));

// 68) Funzione che moltiplica due numeri

// function moltiplica(a,b) {
//     return a*b;
// }

// console.log(moltiplica(5,3));

// 69) Funzione che divide due numeri

// function divisione(a,b) {
//     return a/b;
// }

// console.log(divisione(6,3));

// 70) Funzione che verifica se un numero è pari

// function pari(a){
//     if(a%2===0){
//         return "il numero è pari";
//     }else{
//         return "il numero non è pari";
//     }
// }

// console.log(pari(6));

// 71) Funzione che ritorna il maggiore di due numeri

// function maggiore(a,b){
//     if(a > b){
//         return a + " è maggiore";
//     }else{
//         return a + " è maggiore";
//     }
// }

// console.log(maggiore(6,1));

// 72) Funzione che ritorna una stringa

// function stringa(){
//     return "ciao"
// }

// console.log(stringa);

// 73) Funzione con parametro di default

// function saluta(nome = "Utente") {
//   return "Ciao " + nome + "!";
// }

// console.log(stringa);

// 74) Funzione che ritorna un oggetto

// function persona(nome, eta) {
//   return {
//     nome: nome,
//     eta: eta
//   };
// }

// console.log(persona("alex",24));

// 75) Funzione che ritorna un array

// function array() {
//   return numbers;
// }

// console.log(array());

// 76) Funzione che accetta callback

function eseguiOperazione(a, b, callback) {
  return callback(a, b);
}

function somma(x, y) {
  return x + y;
}

console.log(eseguiOperazione(5, 3, somma));

// 77) Funzione che ritorna un’altra funzione
// 78) Arrow function equivalente
// 79) Funzione che usa rest parameters
// 80) Funzione che usa spread operator


// =======================
// CONDIZIONI & CICLI (81–95)
// =======================

// 81) If: controlla se un numero è > 10

// for (let index = 0; index < numbers.length; index++) {
//     if(numbers[index] >10){
//         console.log(numbers[index] + ": è maggiore di 10");
//     }
// }

// 82) If/else: pari o dispari

// for (let index = 0; index < numbers.length; index++) {
//     if(numbers[index] %2==0){
//         console.log(numbers[index] + " è pari");
//     }else{
//         console.log(numbers[index] + " è dispari");
//     }
// }

// 83) Ternario: maggiore o minore
// 84) Switch con giorni della settimana

// const giorno = 3;

// switch (giorno) {
//   case 1:
//     console.log("Lunedì");
//     break;
//   case 2:
//     console.log("Martedì");
//     break;
//   case 3:
//     console.log("Mercoledì");
//     break;
//   case 4:
//     console.log("Giovedì");
//     break;
//   case 5:
//     console.log("Venerdì");
//     break;
//   case 6:
//     console.log("Sabato");
//     break;
//   case 7:
//     console.log("Domenica");
//     break;
//   default:
//     console.log("Giorno non valido");
// }

// 85) For: stampa numeri da 1 a 10

// for (let index = 1; index < 11; index++) {
//     console.log(index);
    
// }

// 86) For: stampa solo numeri pari

// for (let index = 0; index <= 50; index++) {
//     if(index %2 == 0){
//         console.log(index);
//     }
// }

// 87) While: conta da 5 a 0

// let count =5;

// while(count >=0){
//     console.log(count);
//     count--;
// }

// 88) Do while: stampa almeno una volta

// let numero = 5;

// do {
//   console.log("Il numero è:", numero);
//   numero--;
// } while (numero < 0);

// 89) For of su numbers

// for (const num of numbers) {
//   console.log(num);
// }

// 90) For in su un employee

// for (let key in employee) {
//     console.log(key, employee[key]);
// }

// 91) Break in un ciclo

// for (let i = 1; i <= 10; i++) {
//     if (i === 5) {
//         break;
//     }

//     console.log(i);
// }

// 92) Continue in un ciclo

// for (let i = 1; i <= 5; i++) {
//     if (i === 3) {
//         continue;
//     }

//     console.log(i);
// }

// 93) Controlla se una variabile è undefined

// let value;

// if (value === undefined) {
//     console.log('La variabile è undefined');
// }

// 94) Controlla se una variabile è null

// let data = null;

// if (data === null) {
//     console.log('La variabile è null');
// }

// 95) Controlla il tipo di una variabile

// let age = 25;

// console.log(typeof age);      
// console.log(typeof 'Ciao');   
// console.log(typeof true); 
// console.log(typeof []);
// console.log(typeof {});


/////////////////////////////////

// stampa solo i pari
// let a = [1,2,3,5,6];

// for(let i=0; i<a.length ; i++){
//     if(a[i] %2 ===0){
//         console.log(a[i])
//     }
// }


// Dato un array di numeri, crea un nuovo array con i numeri maggiori di 10.

// let num = [4, 12, 7, 25, 3, 18];

// let a = [];

// for(let i=0; i< num.length; i++){
//     if(num[i]>10){
//         a.push(num[i]);
//     }
// }

// console.log(a);


// Dato un array di stringhe, restituisci un array con la lunghezza di ogni parola.

// let str = ["ciao", "javascript", "dev"];
// let a =[];

// for (let index = 0; index < str.length; index++) {
//     let lunghezza = str[index].length;
//     a.push(lunghezza);
// }

// console.log(a);


// Dato un array di oggetti utenti, trova il primo utente con età maggiore di 30.

// let a=
// [
//   { nome: "Luca", eta: 25 },
//   { nome: "Anna", eta: 32 },
//   { nome: "Marco", eta: 28 }
// ]

// let b =a.find(e => e.eta>30);

// console.log(b);


//Dato un array di numeri, restituisci un array con i quadrati dei numeri dispari.


// let num= [1, 2, 3, 4, 5];
// let a=[];
// for (let index = 0; index < num.length; index++) {
//     if(num[index] %2 ==1){
//         a.push(num[index] * num[index]);
//     }
// }

// console.log(a);


//Filtra i prodotti in stock

// const prodotti = [
//   { nome: "Laptop", inStock: true },
//   { nome: "Mouse", inStock: false },
//   { nome: "Tastiera", inStock: true },
//   { nome: "Monitor", inStock: false }
// ];
// // Filtra solo i prodotti in magazzino (inStock: true).

// let a = prodotti.filter(e => e.inStock=== true);

// console.log(a);


// Estrai i nomi dei prodotti
// Dato lo stesso array prodotti, crea un array con solo i nomi dei prodotti.

// const prodotti = [
//   { nome: "Laptop", inStock: true },
//   { nome: "Mouse", inStock: false },
//   { nome: "Tastiera", inStock: true },
//   { nome: "Monitor", inStock: false }
// ];

// let a = prodotti.map(e => e.nome);

// console.log(a);


// Trova il primo utente premium

// const utenti = [
//   { nome: "Luca", isPremium: false },
//   { nome: "Anna", isPremium: true },
//   { nome: "Marco", isPremium: false },
//   { nome: "Giada", isPremium: true }
// ];

// let a = utenti.find(e=> e.isPremium === true);

// console.log(a);


// Stampa i nomi in maiuscolo

// const studenti = [
//   { nome: "mario", eta: 20 },
//   { nome: "luca", eta: 22 },
//   { nome: "chiara", eta: 19 }
// ];
// // Usa forEach per stampare in console il nome di ogni studente con la prima lettera maiuscola (es. "Mario", "Luca", "Chiara").
// // Output in console:

// // text
// // Mario
// // Luca
// // Chiara


// studenti.forEach(stud => {
//   const capitalized = stud.nome.charAt(0).toUpperCase() + stud.nome.slice(1);
//   console.log(capitalized);
// });


// Crea un array con nome e prezzo scontato

// const prodotti = [
//   { nome: "Laptop", prezzo: 1000 },
//   { nome: "Mouse", prezzo: 25 },
//   { nome: "Tastiera", prezzo: 70 }
// ];
// // Calcola per ogni prodotto il prezzo scontato del 10% e crea un nuovo array di oggetti con { nome, prezzoScontato }.

// [
//   { nome: "Laptop", prezzoScontato: 900 },
//   { nome: "Mouse", prezzoScontato: 22.5 },
//   { nome: "Tastiera", prezzoScontato: 63 }
// ]


// const b =prodotti.map(e =>({nome: e.nome, prezzoScontato: e.prezzo-(e.prezzo*10)/100}))

// console.log(b);
