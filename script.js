var limite = 100; // Creo una variabile contenente il numero massimo di numeri
var num_bombe = 16; // Creo una variabile contenente le bombe del pc
var max_tentativi = limite - num_bombe; // Creo una variabile con il numero massimo di tentativi per arrivare alla vittoria
var arr_bombe = generatoreBombe(num_bombe, limite); // Devo creare una variabile contenente la funione che genera le bombe random
var num_giocati = []; // Creo un array vuoto in cui andrò ad inserire i numeri giocati dall'utente
var gioco_finito = false; // Creo la condizione per cui il ciclo finirà


// Creo il ciclo per cui il gioco continua a girare fino a quando la condizione di gioco finito diventa true
while(gioco_finito === false){
  
  //Creo una variabile con dentro la richiesta per l'utente
  var numero = parseInt(prompt("Inserisci un numero da 1 a 100"));

  //Creo le condizioni del gioco
  // se l'utente ha già inserito un numero
  // se l'utente ha inserito un numero che corrisponde ad una bomba
  // se il numero è maggiore a 100
  // se il numero è minore di 1
  // se non viene inserito un numero
  // se il numero di tentativi raggiunge lo stesso numero dei numeri giocati 
  if(num_giocati.includes(numero) === true){

    alert("Hai già inserito questo numero, riprova!")

  }else if(arr_bombe.includes(numero) === true){

    alert("Mi dispiace hai perso. Hai fatto: " + num_giocati.length + " tentativi")
    gioco_finito = true;

  }else if(numero > limite){

    alert("Occhio, il numero è superiore a " + limit + " . Inserisci un altro numero!")

  }else if(numero < 1){

    alert("Occhio, il numero inserito è minore di 1! Inserisci un numero da 1 a 100!")

  }else if(isNaN(numero) === true){

    alert("Attenzione non hai inserito un numero, Ritenta!")

  }else{

    num_giocati.push(numero);
    if(max_tentativi === num_giocati.length){
      alert("HAI VINTO!")
      gioco_finito = true;
    }
  }

  
}


// Devo creare una funzione che genera 16 numeri random su 100 e li mette dentro un array che una volta evocato conterrà le 16 bombe(numeri) da evitare
function generatoreBombe(numeroBombe, max){
  var arrBombs = [];

  //creo un ciclo che va avanti fino a quando non si raggiungono 16 bombe (numeroBombe == num_bombe)
  while(arrBombs.length < numeroBombe){
    var bomba = getRandomNumber(max);
  
  //creo una condizione per cui se un numero estratto non è già presente nell'array delle bombe allora deve essere inserito, altrimenti il ciclo continua a girare
    if(arrBombs.includes(bomba) === false){
      arrBombs.push(bomba);
    }
  }

  // devo chiedere il return dell'array
  return arrBombs;
}


//Devo creare una funzione che genera numeri random fino al max che sarebbe 100
function generatoreNumeri(max){
  return Math.ceil(Math.random() * max);
}
 
 
