//references to HTML elements
const questionElement = document.getElementById("question");
const wordInputElement = document.getElementById("word-input");
const remainedLettersElement = document.getElementById("letters-remained");
const letterInputElement = document.getElementById("letter-input");
const wordElement = document.querySelector(".word");
const resultMessage = document.getElementById("result-message");
const playAgain = document.getElementById("play-again");
const guessButton = document.getElementById("guess-button");
let wordLettersElement;

//global variables
const questionsWords = [['AAA', 'aaa'], ["question1", "answer1"], ["question2", "answer2"]];
let currentIndex = 0;
let initialLettersNumber;
let remainedLettersNumber;
let trials;


//functions
function startGame() {
    currentIndex = (currentIndex + 1) % questionsWords.length;
    switchInput(true, false);
    wordElement.innerHTML = getWordDivs();
    questionElement.innerHTML = questionsWords[currentIndex][0];
    remainedLettersElement.innerHTML = `remained ${remainedLettersNumber} letters`;
    wordInputElement.value = '';
    resultMessage.innerHTML = '';
    playAgain.style.display = 'none';
    guessButton.style.display = 'inline-block'; 
    wordLettersElement = Array.from(wordElement.children);
    trials = Math.ceil(initialLettersNumber * 0.7);
}

function getWordDivs() {
    remainedLettersNumber = initialLettersNumber = questionsWords[currentIndex][1].length;
    return '<div class="word-letter" style="background-color:black"></div>'.repeat(initialLettersNumber);
}

function checkWord() {
    const answer = wordInputElement.value;
    if (answer.length - initialLettersNumber) {
        wordInputElement.value = '';
        resultMessage.innerHTML = 'wrong word length';
    } else {
        remainedLettersNumber = 0;
        wordLettersElement.forEach((e, i) => fillElement(e, answer[i]));
        finishGame();
    }
}

function fillElement(element, letter) {
    element.innerHTML = letter;
    element.style.backgroundColor = 'white';
}

function checkLetter(letter) {
    Array.from(questionsWords[currentIndex][1]).forEach((e, i) => {
        if (e == letter) {
            fillElement(wordLettersElement[i], letter);
            remainedLettersNumber--;
        }
    });
}

function processLetter() {
    checkLetter(letterInputElement.value);
    letterInputElement.value = '';
    remainedLettersElement.innerHTML = `remained ${remainedLettersNumber} letters`;

    if (remainedLettersNumber < trials && remainedLettersNumber) {
        switchInput(false, true);
    } else if (!remainedLettersNumber)
        finishGame();
}

function switchInput(word, letter) {
    wordInputElement.disabled = word;
    letterInputElement.disabled = letter;
    guessButton.style.display = 'none';
}

function takeChance() {
    switchInput(false, true);
}

function finishGame() {
    guessButton.style.display = 'none';
    const answer = questionsWords[currentIndex][1];
    resultMessage.innerHTML = !wordInputElement.value || wordInputElement.value == answer ? "you win" : "you lose";
    playAgain.style.display = 'block';
    switchInput(true, true);
}
//actions
startGame();