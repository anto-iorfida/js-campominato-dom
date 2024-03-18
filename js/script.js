// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
// Bonus
// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
// - con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// - con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// - con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;


// crare il bottone bigbang l'inizio di tutto 

const mainGrid = document.querySelector('.grid');
const records = document.querySelector('#record')
document.querySelector('#play').addEventListener('click', function () {

    mainGrid.innerHTML = "";
    // ogni volta che clicco play inizializzo a zero record 
    counter = 0;
    records.textContent = counter;

    mainGrid.classList.remove('none')

    difficultyLevelGrid();
    difficultyLevel();

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

// Funzione che genera un quadrato e incementa di 1 il record
// number -> numero che rappresenta il quadrato
// return newsquare---> elemento del dom che rappresenta un quadrato
// counter-->variabile da incrementare al click di newsquare 
let counter = 0;

function generateSquare(number) {
    const newSquare = document.createElement('div');

    newSquare.classList.add('square');
    newSquare.innerHTML = `<span>${number}</span>`;

    // Gestione del click su ogni qudrato, aggiunge classe blue ,allert e incrementa counter
    newSquare.addEventListener('click', function () {
     
        this.classList.add('bg-white');
        console.log('hai cliccato il', number)
  
         // Incrementa il contatore e aggiorna il contenuto di #record

         counter++;
         records.textContent = counter;
        
    });

    return newSquare;
}

// generare funzione che ad ogni livello cambia il numero di quadrati
function difficultyLevelGrid() {
    // richiamare elementi che servono per la condizione 
    const level = document.querySelector('#livello').value;
    const mainGrid = document.querySelector('.grid');
    let numGrids = 100;
   
    // aumenta i quadrati in base al level
  
       if (level === 'hard') {

        numGrids = 81;

      } else if (level === 'crazy') {

        numGrids = 49;
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

