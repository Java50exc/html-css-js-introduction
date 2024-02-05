//references to DOM elements
const guessInputElement = document.querySelector(".guess-input");
const guessLettersElement = document.querySelector(".guess-letters");
let lettersDivs;
const trialsElement = document.querySelector(".trials-remained");
const gameResultElement = document.querySelector(".game-result");
const playAgainElement = document.querySelector(".play-again");

//varibales required for JS logic
const wordsForGuess = ["pappy", "apple", "table", "gold", "silver", "index",
 "script", "peace", "picture"]
 let trials; 
 let word;
 let flGameOver = false;

 //functions
 function startGame() {
     word = getWord();
     fillLettersDivs();
     flGameOver = false;
     trials = word.length + 1;
     playAgainElement.style.display = "none";
     gameResultElement.innerHTML = "";
     trialsElement.innerHTML = `remained trials ${trials}`;
 }

 function getWord() {
    const index = Math.trunc(Math.random() * wordsForGuess.length);
    return wordsForGuess[index];
 }

 function fillLettersDivs() {
    const arrayWord = Array.from(word);
    guessLettersElement.innerHTML = arrayWord.reduce((res) => res + '<div class="letter"></div>','');
    lettersDivs = Array.from(guessLettersElement.children);
 }

 function onChange() {
    if (flGameOver) {
        alert("game is over, press play-again");
    } else {
        const trialWord = guessInputElement.value;
        trialsElement.innerHTML = `remained trials ${--trials}`;

        if (trialWord.length != word.length) {
            alert("wrong number of letters");
        } else {
            coloringWord(trialWord);
        }  
    }
    finishGame();

 }

 function coloringWord(trialWord) {
    const arWord = Array.from(trialWord);

    arWord.forEach((letter, index) => {
        lettersDivs[index].innerHTML = letter;
        lettersDivs[index].style.color = getColor(letter, index);
    });
 }

 function getColor(letter, index) {
    let res = "red"
    if (word.includes(letter)) {
        res = word[index] == letter ? "green" : "yellow";
    }
    return res;
 }

 function finishGame() {
    const fails = lettersDivs.reduce((acc, cur) => cur.style.color == 'green' ? acc : acc + 1, 0);
    guessInputElement.value = '';

    if (flGameOver = !fails || !trials) {
        gameResultElement.innerHTML = !trials ? 'Sorry, but number of trials has ended up' :
        `Congratulations, you have guessed the word using ${word.length + 1 - trials} trials`;

        playAgainElement.style.display = 'block';
        
    }
 }

 //actions
 startGame();