

function greetings(firstName, lastName) {
    console.log(`Hi there, ${firstName} ${lastName}!`)
}


//Repeat strings 3 times
function repeat(message) {
    console.log(`${message}${message}${message}`)
}


//Repeat strings as many times as zou want.
function repeater(str, numRepetitions) {
    let repeatedString = "";

    for (let i = 0; i < numRepetitions; i++) {
        repeatedString += str;
    }

    console.log(repeatedString)
}

// If you roll with two dice (1 and 1), you get Sneak Eyes.
function isSnakeEyes(firstDice, secondDice) {
    if (firstDice === 1 && secondDice === 1) {
        console.log('Snake Eyes!')
    } else {
        console.log('Not Snake Eyes!')
    }
}



// Multiply them together (x and y)
function add(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        return 'you must use numbers';
    } else {
        let sum = x + y;
        return sum;
    }
}


// If Fahrenheit greater than or equal to 75 you should use shorts
function isShortsWeather(temperature) {
    if (temperature >= 75) {
        return true;
    } else {
        return false;
    }
}
let array = []


// Get last element from array
function lastElement(arraylast) {
    if (arraylast.length === 0) {
        return null
    }
    else {
        return arraylast[arraylast.length - 1]
    }
}


//Make first letter uppercase

function capitalize(string) {
    let firstLetter = string.slice(0, 1).toUpperCase();
    let otherLetters = string.slice(1);
    return firstLetter + otherLetters;
}


// Add numbers in arrays 
numeros = [1, 3, 5, 1]

function sumArray(array) {
    let sum = 0
    for (let numbers of array) {
        sum += numbers
    }
    return sum
}


//Days of week
let daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

function returnDay(dayNum) {
    if (dayNum > 7 || dayNum < 1) {
        return null;
    } else {
        return daysOfWeek[dayNum - 1]
    }

}



