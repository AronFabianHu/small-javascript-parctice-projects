
const todoList = []
let input = ""

// while (true) {
//     input = prompt("What would you like to do?")
//     if (input === "quit") { break; }
//     else if (input === "new") {
//         todoList.push(input = prompt("What would you like to add to your list?"))
//     }
// }



while (input !== "quit") {
    input = prompt("What would you like to do?")
    if (input === "new") {
        todoList.push(input = prompt("What would you like to add to your list?"))
        console.log(`${todoList[todoList.length - 1]} added to list `)
    }
    else if (input === "delete") {
        const deleted = todoList.splice(input = prompt('What would you like to remove ? Write the number:'), 1);
        console.log(`${deleted} removed from list`)
    }
    else if (input === "list") {
        console.log(`************************ `)
        for (let i = 0; i < todoList.length; i++) {
            console.log(`${i}: ${todoList[i]} `)

        }
        console.log(`************************ `)
    }
}



console.log("You stopped the App!")




// for (let listNum = 0; listNum <= todoList.length; listNum++) {
//     for (let list of todoList) {
//         console.log(`************************ `)
//         console.log(`${ listNum }: ${ list } `)
//         console.log(`************************ `)
//     }
// }