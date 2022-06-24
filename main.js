// Consegna
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
// Bonus
// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
// con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;



const populate = document.getElementById('start')

populate.addEventListener('click',function(){
    // prendo il parent nel DOM
const gridContainer = document.getElementById('grid-container');

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

},{once : true})






// funzione che mi crea il nuovo quadrato creando un nuovo HTMLelement e aggiungendogli la mia classe square
function createNewSquare(){
    const currentSquare = document.createElement('div');
    currentSquare.classList.add('square');
    return currentSquare;
}
// funzione che aggiunge e/o rimuove una classe a un dato elemento HTML
function addEventListenerWithToggle(htmlElement, classToToggle){
    htmlElement.addEventListener('click', function(){
        htmlElement.classList.toggle(classToToggle);
        console.log('hai cliccato la casella : '+ htmlElement.innerHTML);
    });
}