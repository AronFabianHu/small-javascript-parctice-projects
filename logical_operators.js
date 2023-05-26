// const password = prompt("Enter your password");

// if (password.length >= 6 && password.indexOf(' ') === -1) {
//     console.log("valid password")
// } else {
//     console.log(" incorret format for password")
// }


// END: &&, OR: ||, NOT: !


// 0-5 free
// 5-10 10€
// 10-65 20€
// 65+ 10€

const age = -100;
if (age >= 0 && age < 5) {
    console.log("free")
} else if (5 < age && age < 10 || age >= 65) {
    console.log("10€")
} else if (10 < age && age < 65) {
    console.log("20€")
} else { console.log("Invalid age") }

const day = 6;

//SWITCH

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Firday");
        break;
    case 6:
    case 7:
        console.log("Weekend");
        break;
    default:
        console.log("I dont know that");
}