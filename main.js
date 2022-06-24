// ?  Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
// ? Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
// ? In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina.
// ? Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
// ? La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
// ? Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
// ? BONUS solo se avete completato la consegna principale con successo:
// ? Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
// ? difficoltà 1 ⇒ 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// ? difficoltà 2 ⇒ 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// ? difficoltà 3 ⇒ 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;



const populate = document.getElementById('start')
let bombs = []


populate.addEventListener('click',function(){
    // prendo il parent nel DOM
const gridContainer = document.getElementById('grid-container');
gridContainer.innerHTML= ''


//  ciclo per il numero di quadrati che voglio generare
for (let i = 1 ; i < 101 ; i++){

   
    // creo un nuovo quadrato con le classi relative
    const newSquare = createNewSquare();


    // il contenuto del quadrato sarà corrispondente quello dell'ndice corrispettivo
    newSquare.innerHTML = i;
   

    //aggiungo il nuovo quadrato al parent
    gridContainer.append(newSquare);

    addEventListenerWithToggle(newSquare, 'cyaned');
    

}
    bombs = generateBombs(16,100)
    console.log(bombs)



})









// funzione che mi crea il nuovo quadrato creando un nuovo HTMLelement e aggiungendogli la mia classe square
function createNewSquare(){
    const currentSquare = document.createElement('div');
    currentSquare.classList.add('square');
    return currentSquare;
}
// funzione che aggiunge e/o rimuove una classe a un dato elemento HTML
function addEventListenerWithToggle(htmlElement, classToToggle){
    htmlElement.addEventListener('click', function(){
      const squareNumber = parseInt(htmlElement.innerHTML)
      if(bombs.includes(squareNumber)){htmlElement.classList.add('redned');
        console.log('hai cliccato la casella : '+ htmlElement.innerHTML);
        alert('hai beccato una bomba gioco terminato')

      }
       
        else{htmlElement.classList.add(classToToggle);
            console.log('hai cliccato la casella : '+ htmlElement.innerHTML);}
    });
}



function generateBombs(bombsNumber, cellNumber){
    const bombsCreated=[];
    
    while(bombsCreated.length < bombsNumber){
        const bomb= getRandomNumber(1, cellNumber);

        if(!bombsCreated.includes(bomb)){
            
            bombsCreated.push(bomb);
        }
    }
    return bombsCreated;
}



function getRandomNumber(minNum, maxNum){
return Math.floor(Math.random() * (maxNum - minNum +1)) + minNum;
}