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

/*
    Checks whether the user's guess matches the current Pokémon name.
*/
function isCorrectGuess(userGuess, pokemonId, list) {
    "use strict";
    return userGuess.trim().toLowerCase() === list[pokemonId].name;
}

/*
    Updates score without mutating external state.
*/
function updateScore(isCorrect, currentScore) {
    "use strict";
    return (
        isCorrect
        ? currentScore + 1
        : currentScore
    );
}

/*
    Moves to the next Pokémon index, wrapping around at the end.
*/
function nextPokemonId(currentId, listLength) {
    "use strict";
    return (currentId + 1) % listLength;
}

/*
    Returns a shuffled copy of an array (Fisher–Yates).
*/
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

/*
    DOM helper: try multiple IDs, then fallback to a selector.
*/
function getElByIdsOrSelector(idList, selector) {
    "use strict";
    let el = null;
    let i;

    if (typeof document !== "object") {
        return null;
    }

    if (idList && idList.length) {
        for (i = 0; i < idList.length; i += 1) {
            el = document.getElementById(idList[i]);
            if (el) {
                return el;
            }
        }
    }

    if (selector) {
        return document.querySelector(selector);
    }

    return null;
}

/*
    Main initializer:
    Caches DOM, sets state, and wires events.
*/
function initializeGame() {
    "use strict";

    let pokemonImage;
    let guessInput;
    let resultText;
    let checkGuessButton;
    let nextPokemonButton;

    let scoreOut;
    let highScoreOut;
    let wrongOut;
    let roundOut;

    let shuffledPokemonList;
    let currentPokemonId;
    let score;
    let highScore;
    let wrongGuesses;

    if (typeof document !== "object") {
        return;
    }

    pokemonImage = getElByIdsOrSelector(
        ["pokemonImage", "pokemon-image", "pokeImage", "silhouetteImage"],
        "[data-role=\"pokemon-image\"]"
    );

    guessInput = getElByIdsOrSelector(
        ["guessInput", "guess-input", "pokemonGuess", "userGuess"],
        "[data-role=\"guess-input\"]"
    );

    resultText = getElByIdsOrSelector(
        ["resultText", "result-text", "feedbackText", "messageText"],
        "[data-role=\"result-text\"]"
    );

    checkGuessButton = getElByIdsOrSelector(
        ["checkGuessButton", "submitGuessButton", "submitButton"],
        "[data-role=\"submit-guess\"]"
    );

    nextPokemonButton = getElByIdsOrSelector(
        ["nextPokemonButton", "nextButton", "skipButton"],
        "[data-role=\"next-pokemon\"]"
    );

    scoreOut = getElByIdsOrSelector(
        ["scoreValue", "score"],
        "[data-role=\"score\"]"
    );

    highScoreOut = getElByIdsOrSelector(
        ["highScoreValue", "highScore"],
        "[data-role=\"high-score\"]"
    );

    wrongOut = getElByIdsOrSelector(
        ["wrongGuessesValue", "wrongGuesses"],
        "[data-role=\"wrong-guesses\"]"
    );

    roundOut = getElByIdsOrSelector(
        ["roundValue", "round"],
        "[data-role=\"round\"]"
    );

    if (
        !pokemonImage ||
        !guessInput ||
        !resultText ||
        !checkGuessButton ||
        !nextPokemonButton
    ) {
        return;
    }

    if (!resultText.getAttribute("aria-live")) {
        resultText.setAttribute("aria-live", "polite");
    }

    shuffledPokemonList = shuffleArray(pokemonList);
    currentPokemonId = 0;
    score = 0;
    highScore = 0;
    wrongGuesses = 0;

    /*
        Updates score indicators if present in the HTML.
    */
    function syncStats() {
        const roundNum = currentPokemonId + 1;
        const total = shuffledPokemonList.length;

        if (scoreOut) {
            scoreOut.textContent = String(score);
        }
        if (highScoreOut) {
            highScoreOut.textContent = String(highScore);
        }
        if (wrongOut) {
            wrongOut.textContent = String(wrongGuesses);
        }
        if (roundOut) {
            roundOut.textContent = (
                String(roundNum) + "/" + String(total)
            );
        }
    }

    /*
        Loads the current Pokémon and resets input state.
    */
    function runGame() {
        pokemonImage.src = shuffledPokemonList[currentPokemonId].img;
        pokemonImage.alt = "Pok\u00E9mon silhouette to guess";

        resultText.textContent = "\u27A1\uFE0F Enter your guess!";
        guessInput.value = "";
        guessInput.disabled = false;
        guessInput.focus();

        syncStats();
    }

    /*
        Shows end-of-round overlay and restart option.
    */
    function showEndOverlay() {
        const overlay = document.createElement("div");
        let restartButton;

        overlay.className = "results-overlay";

        overlay.innerHTML = (
            "<div class=\"results-content text-center " +
            "bg-light p-4 rounded shadow\">" +
            "<h2>\uD83C\uDFC1 Round Finished!</h2>" +
            "<p>Final Score: " + score + "</p>" +
            "<p>Wrong Guesses: " + wrongGuesses + "</p>" +
            "<p>High Score: " + highScore + "</p>" +
            "<button id=\"restartButton\" " +
            "class=\"btn btn-success mt-3\" type=\"button\">" +
            "Restart Game" +
            "</button>" +
            "</div>"
        );

        document.body.appendChild(overlay);

        restartButton = document.getElementById("restartButton");
        restartButton.addEventListener("click", function () {
            document.body.removeChild(overlay);
            restartGame();
        });
    }

    /*
        Move to next Pokémon or end the round.
    */
    function goNextOrEnd() {
        if (currentPokemonId === shuffledPokemonList.length - 1) {
            showEndOverlay();
            return;
        }

        currentPokemonId = nextPokemonId(
            currentPokemonId,
            shuffledPokemonList.length
        );
        runGame();
    }

    /*
        Handles user guess submission.
    */
    function handleCheckGuess() {
        const userGuess = guessInput.value.trim();
        const correct = isCorrectGuess(
            userGuess,
            currentPokemonId,
            shuffledPokemonList
        );

        if (!userGuess) {
            resultText.textContent = "\u26A0\uFE0F Please enter a guess!";
            return;
        }

        if (correct) {
            score = updateScore(true, score);
            if (score > highScore) {
                highScore = score;
            }

            resultText.textContent = (
                "\uD83C\uDF89 Correct! It's " +
                shuffledPokemonList[currentPokemonId].name +
                "!"
            );
        } else {
            wrongGuesses += 1;
            resultText.textContent = "\u274C Wrong guess!";
        }

        syncStats();
        setTimeout(goNextOrEnd, 800);
    }

    /*
        Skip handler: counts as wrong and advances.
    */
    function handleSkip() {
        wrongGuesses += 1;
        resultText.textContent = "\u23ED\uFE0F Skipped!";
        syncStats();
        setTimeout(goNextOrEnd, 250);
    }

    /*
        Restarts the game with a reshuffle.
        High score remains.
    */
    function restartGame() {
        shuffledPokemonList = shuffleArray(pokemonList);
        currentPokemonId = 0;
        score = 0;
        wrongGuesses = 0;
        runGame();
    }

    /*
        Keyboard support: Enter submits a guess.
    */
    function handleKeyDown(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            handleCheckGuess();
        }
    }

    checkGuessButton.addEventListener("click", handleCheckGuess);
    nextPokemonButton.addEventListener("click", handleSkip);
    guessInput.addEventListener("keydown", handleKeyDown);

    runGame();
}

if (typeof document === "object") {
    document.addEventListener("DOMContentLoaded", initializeGame);
}

if (typeof module === "object" && module.exports) {
    module.exports.isCorrectGuess = isCorrectGuess;
    module.exports.nextPokemonId = nextPokemonId;
    module.exports.pokemonList = pokemonList;
    module.exports.shuffleArray = shuffleArray;
    module.exports.updateScore = updateScore;
}
