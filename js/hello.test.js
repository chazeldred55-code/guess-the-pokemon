/*
    Import pure game logic functions for unit testing.
    These functions are isolated from the DOM, making them suitable
    for automated testing in a Node/Jest environment.
*/
const {
  isCorrectGuess,
  updateScore,
  nextPokemonId,
  shuffleArray,
  pokemonList
} = require('./game');

/*
    Test: isCorrectGuess
    Verifies that a correct user input matches the expected Pokémon name.
*/
test('isCorrectGuess returns true for correct guess', () => {
  expect(isCorrectGuess('pikachu', 0, pokemonList)).toBe(true);
});

/*
    Test: isCorrectGuess (negative case)
    Ensures incorrect guesses are correctly identified.
*/
test('isCorrectGuess returns false for wrong guess', () => {
  expect(isCorrectGuess('bulbasaur', 0, pokemonList)).toBe(false);
});

/*
    Test: updateScore
    Confirms that the score only increments when the guess is correct.
*/
test('updateScore increments correctly', () => {
  expect(updateScore(true, 0)).toBe(1);
  expect(updateScore(false, 2)).toBe(2);
});

/*
    Test: nextPokemonId
    Ensures the Pokémon index advances correctly and wraps
    back to zero at the end of the list.
*/
test('nextPokemonId loops correctly', () => {
  expect(nextPokemonId(0, 5)).toBe(1);
  expect(nextPokemonId(4, 5)).toBe(0);
});

/*
    Test: shuffleArray
    Confirms that the shuffled array:
    - Contains the same number of items
    - Produces a different order from the original (most of the time)
*/
test('shuffleArray returns a shuffled array', () => {
  const shuffled = shuffleArray(pokemonList);
  expect(shuffled.length).toBe(pokemonList.length);

  // Order comparison ensures shuffling occurred
  expect(shuffled).not.toEqual(pokemonList);
});
