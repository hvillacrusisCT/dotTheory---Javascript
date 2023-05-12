/**
 * Returns a random number between two numbers.
 * 
 * @param {number} lower - The lowest number value
 * @param {number} upper - The highest number value
 * @return {number} The random number value
 */
function getRandomNumber(lower, upper) {
  return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}


let randomNumber = getRandomNumber(1, 6); // returns a random number between 1 and 6 (inclusive)
let anotherRandomNumber = getRandomNumber(10, 20); // returns a random number between 10 and 20 (inclusive)

console.log(randomNumber)
console.log(anotherRandomNumber)
