function validateUserInput(input) {
  try {
    if (typeof input !== 'object' || input === null) {
      throw new Error('Input must be an object');
    }
    if (!('name' in input) || !('email' in input)) {
      throw new Error('Input object must contain name and email properties');
    }
    if (typeof input.name !== 'string' || typeof input.email !== 'string') {
      throw new Error('Name and email must be strings');
    }
    return true;
  } catch (error) {
    console.error('Validation error:', error.message);
    return false;
  }
}

function demonstrateErrors() {
  try {
    let num = null;
    console.log(num.toString());
  } catch (error) {
    if (error instanceof TypeError) {
      console.error('TypeError:', error.message);
    }
  }

  try {
    let arr = new Array(-1);
  } catch (error) {
    if (error instanceof RangeError) {
      console.error('RangeError:', error.message);
    }
  }

  try {
    throw new Error('Something went wrong');
  } catch (error) {
    console.error('Custom error:', error.message);
  }
}

const stringHelpers = {
  capitalize: (str) => str.charAt(0).toUpperCase() + str.slice(1),
  trim: (str) => str.trim(),
  toLowercase: (str) => str.toLowerCase(),
};

const arrayHelpers = {
  filterEvenNumbers: (arr) => arr.filter((num) => num % 2 === 0),
  doubleNumbers: (arr) => arr.map((num) => num * 2),
  sumNumbers: (arr) => arr.reduce((acc, num) => acc + num, 0),
};

const userInput = { name: 'Liviwe Sandi', email: 'sandi.lviwe04@gmail.com' };
console.log(validateUserInput(userInput));

demonstrateErrors();

console.log(stringHelpers.capitalize('hello'));
console.log(stringHelpers.trim('   world   '));
console.log(stringHelpers.toLowercase('HELLO'));

console.log(arrayHelpers.filterEvenNumbers([1, 2, 3, 4, 5]));
console.log(arrayHelpers.doubleNumbers([1, 2, 3, 4, 5]));
console.log(arrayHelpers.sumNumbers([1, 2, 3, 4, 5]));