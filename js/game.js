/*global document, module, Math, setTimeout */
/*jslint browser: true, for: true */

const pokemonList = [
    {img: "assets/images/pikachu01.png", name: "pikachu"},
    {img: "assets/images/charmander02.png", name: "charmander"},
    {img: "assets/images/bulbasaur03.png", name: "bulbasaur"},
    {img: "assets/images/squirtle04.png", name: "squirtle"},
    {img: "assets/images/jigglypuff05.png", name: "jigglypuff"},
    {img: "assets/images/meowth06.png", name: "meowth"},
    {img: "assets/images/psyduck07.png", name: "psyduck"},
    {img: "assets/images/snorlax08.png", name: "snorlax"},
    {img: "assets/images/eevee09.png", name: "eevee"},
    {img: "assets/images/vulpix10.png", name: "vulpix"},
    {img: "assets/images/growlithe11.png", name: "growlithe"},
    {img: "assets/images/machop12.png", name: "machop"},
    {img: "assets/images/geodude13.png", name: "geodude"},
    {img: "assets/images/onix14.png", name: "onix"},
    {img: "assets/images/magnemite15.png", name: "magnemite"},
    {img: "assets/images/gastly16.png", name: "gastly"},
    {img: "assets/images/haunter17.png", name: "haunter"},
    {img: "assets/images/alakazam18.png", name: "alakazam"},
    {img: "assets/images/magikarp19.png", name: "magikarp"},
    {img: "assets/images/gengar20.png", name: "gengar"}
];

function isCorrectGuess(userGuess, pokemonId, list) {
    "use strict";
    return userGuess.trim().toLowerCase() === list[pokemonId].name;
}

function updateScore(isCorrect, currentScore) {
    "use strict";
    return (
        isCorrect
        ? currentScore + 1
        : currentScore
    );
}

function nextPokemonId(currentId, listLength) {
    "use strict";
    return (currentId + 1) % listLength;
}

function shuffleArray(array) {
    "use strict";
    const copy = array.slice();
    let i;
    let j;
    let temp;

    for (i = copy.length - 1; i > 0; i -= 1) {
        j = Math.floor(Math.random() * (i + 1));
        temp = copy[i];
        copy[i] = copy[j];
        copy[j] = temp;
    }
    return copy;
}

function initializeGame() {
    "use strict";

    let pokemonImage;
    let guessInput;
    let resultText;
    let checkGuessButton;
    let nextPokemonButton;
    let shuffledPokemonList;
    let currentPokemonId;
    let score;
    let highScore;
    let wrongGuesses;

    if (typeof document !== "object") {
        return;
    }

    pokemonImage = document.getElementById("pokemonImage");
    guessInput = document.getElementById("guessInput");
    resultText = document.getElementById("resultText");
    checkGuessButton = document.getElementById("checkGuessButton");
    nextPokemonButton = document.getElementById("nextPokemonButton");
    shuffledPokemonList = shuffleArray(pokemonList);
    currentPokemonId = 0;
    score = 0;
    highScore = 0;
    wrongGuesses = 0;

    function runGame() {
        pokemonImage.src = shuffledPokemonList[currentPokemonId].img;
        resultText.textContent = "➡️ Enter your guess!";
        guessInput.value = "";
        guessInput.disabled = false;
        guessInput.focus();
    }

    function showEndOverlay() {
        const overlay = document.createElement("div");

        overlay.className = "results-overlay";
        overlay.innerHTML = `
            <div class="results-content text-center
                bg-light p-4 rounded shadow">
                <h2>🏁 Round Finished!</h2>
                <p>Final Score: ${score}</p>
                <p>Wrong Guesses: ${wrongGuesses}</p>
                <p>High Score: ${highScore}</p>
                <button id="restartButton"
                    class="btn btn-success mt-3">
                    Restart Game
                </button>
            </div>
        `;
        document.body.appendChild(overlay);

        const restartButton = document.getElementById("restartButton");
        restartButton.addEventListener("click", function () {
            document.body.removeChild(overlay);
            restartGame();
        });
    }

    function handleCheckGuess() {
        const userGuess = guessInput.value.trim();

        if (!userGuess) {
            resultText.textContent = "⚠️ Please enter a guess!";
            return;
        }

        const correct = isCorrectGuess(
            userGuess,
            currentPokemonId,
            shuffledPokemonList
        );

        if (correct) {
            score = updateScore(true, score);
            if (score > highScore) {
                highScore = score;
            }
            resultText.textContent = `🎉 Correct! It's
${shuffledPokemonList[currentPokemonId].name}!
Score: ${score}`;
        } else {
            wrongGuesses += 1;
            resultText.textContent = "❌ Wrong guess!";
        }

        setTimeout(function () {
            if (currentPokemonId === shuffledPokemonList.length - 1) {
                showEndOverlay();
            } else {
                currentPokemonId = nextPokemonId(
                    currentPokemonId,
                    shuffledPokemonList.length
                );
                runGame();
            }
        }, 800);
    }

    function handleSkip() {
        wrongGuesses += 1;
        if (currentPokemonId === shuffledPokemonList.length - 1) {
            showEndOverlay();
        } else {
            currentPokemonId = nextPokemonId(
                currentPokemonId,
                shuffledPokemonList.length
            );
            runGame();
        }
    }

    function restartGame() {
        shuffledPokemonList = shuffleArray(pokemonList);
        currentPokemonId = 0;
        score = 0;
        wrongGuesses = 0;
        runGame();
    }

    function handleKeyPress(event) {
        if (event.key === "Enter") {
            handleCheckGuess();
        }
    }

    checkGuessButton.addEventListener("click", handleCheckGuess);
    nextPokemonButton.addEventListener("click", handleSkip);
    guessInput.addEventListener("keypress", handleKeyPress);

    runGame();
}

if (typeof document === "object") {
    document.addEventListener("DOMContentLoaded", initializeGame);
}

if (typeof module === "object" && module.exports) {
    module.exports = {
        isCorrectGuess,
        nextPokemonId,
        pokemonList,
        shuffleArray,
        updateScore
    };
}