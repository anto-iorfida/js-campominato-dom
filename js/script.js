// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
// Bonus
// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
// - con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// - con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// - con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
// ----------------------------------------------------------------------------------------------------------------------------------
// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta:le bombe. 
// Attenzione: nella stessa cella può essere posizionata al massimo una bomba, 
// perciò nell’array delle bombe non potranno esserci due numeri uguali.
// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati 
// - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. 
// Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.La partita termina 
// quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti 
// (ovvero quando ha rivelato tutte le celle che non sono bombe).
// -----------------------------------------------------------------------------------------------------------------------------------

// crare il bottone bigbang l'inizio di tutto 

const mainGrid = document.querySelector('.grid');
const records = document.querySelector('#record')
document.querySelector('#play').addEventListener('click', function () {

    mainGrid.innerHTML = "";
    document.querySelector('.gif-1').classList.add('none')
    // ogni volta che clicco play inizializzo a zero record 
    counter = 0;
    records.textContent = counter;

    mainGrid.classList.remove('none')

    difficultyLevelGrid();
    difficultyLevel();
    // logicGame();
    console.log(random);
    
});

// creare bottore dark/light mode 
const btnMode = document.querySelector('.btn')
const container = document.querySelector('.container')
const containerCenter = document.querySelector('.container-center')
const squares = mainGrid.querySelectorAll('.square');

btnMode.addEventListener('click', function(){
    container.classList.toggle('bg-skyblue')
    containerCenter.classList.toggle('bg-white')
    btnMode.classList.toggle('light')
    
    if(btnMode.classList.contains('light')){
       
        btnMode.innerHTML = '<i class="fa-solid fa-sun"></i>';
        mainGrid.classList.add('bg-greenlight')
          
    }else{

        btnMode.innerHTML = '<i class="fa-solid fa-moon"></i>';
        mainGrid.classList.remove('bg-greenlight')

    }
    
})

// FUNCTION -----------------------------------------------------
// funzione che da un array di 16 numeri casuali diversi tra loro 
// min-->numero minimo da generare (incluso)
// max-->numero massimo da generare (incluso)
// numBomb--> array di 16 numeri generati 
function getRndInteger(min, max) {

    const numBomb = [];
    
    // generare numero per 16 volte con condizione che non ci devono essere duplicati 
    for (let i = 0 ; i < 16 ; i ++){
        let num = Math.floor(Math.random() * (max - min + 1) ) + min    
    
        if (!numBomb.includes(num)){
            
            numBomb.push(num)

        }
     
    }
    return numBomb;
  }


// Funzione che genera un quadrato e incementa di 1 il record
// number -> numero che rappresenta il quadrato
// return newsquare---> elemento del dom che rappresenta un quadrato
// counter-->variabile da incrementare al click di newsquare 
let counter = 0;

function generateSquare(number) {
    const newSquare = document.createElement('div');
    const newSquares = document.querySelectorAll('div.square')

    newSquare.classList.add('square');
    newSquare.innerHTML = `<span>${number}</span>`;

  

    // Gestione del click su ogni qudrato, aggiunge classe blue ,allert e incrementa counter
    newSquare.addEventListener('click', function () {
     
        this.classList.add('bg-white');
        console.log('hai cliccato il', number)
  
         // Incrementa il contatore e aggiorna il contenuto di #record

         counter++;
         records.textContent = counter;

        //  LOGICA DI GIOCO

        // se l'utente clicca una casella ,e il numero della casella è uguale al numero presente nell'array allora ha perso

        // altrimenti può continuare a giocare

        for(let i = 0 ; i < random.length ; i++){
            let numLoser = random[i];
            if (numLoser === number){
                alert('hai perso , il tuo record è di ' + (counter - 1))
                newSquare.classList.add('bg-red');
                document.querySelector('.gif-1').classList.remove('none')

            }
            
        }
        
    });

    return newSquare;
}

// generare funzione che ad ogni livello cambia il numero di quadrati
// e includo che il numero random che deve uscire ad ogni livello 
let random;
function difficultyLevelGrid() {
    // richiamare elementi che servono per la condizione 
    const level = document.querySelector('#livello').value;
    const mainGrid = document.querySelector('.grid');
    let numGrids = 100;
    random = getRndInteger(1, 100);
   
    // aumenta i quadrati in base al level
    // e definisce random ad ogni level 
  
       if (level === 'hard') {

        numGrids = 81;
        random = getRndInteger(1, 81);

      } else if (level === 'crazy') {

        numGrids = 49;
        random = getRndInteger(1, 49);

      } 

      for (let i = 1; i <= numGrids; i++) {
        const newSquare = generateSquare(i);
        mainGrid.append(newSquare);
    }
    
}

// generare funzione che ad ogni livello selezionato applica una 
// classe di dimensione differente hai quadrati
function difficultyLevel() {
    // richimare elementi che servono per applicare condizione 
    const level = document.querySelector('#livello').value;
    const squares = document.querySelectorAll('.square');
    let levelName = "easy";

    // Applica la classe in base al level

     if (level === 'hard') {

        levelName = "hard";

    } else if (level === 'crazy') {

        levelName = "crazy";
    }

    for (let i = 0; i < squares.length; i++) {
        squares[i].classList.add(levelName);
    }

}



  

