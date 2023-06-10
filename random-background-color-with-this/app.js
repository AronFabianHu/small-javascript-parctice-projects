

// const r = function () {  };
// const g = function () { return Math.floor(Math.random() * 256) };
// const b = function () { return Math.floor(Math.random() * 256) };

// const h1 = document.querySelector('#rgb')
// const button = document.querySelector('#colorbtn')
// const body = document.querySelector('body')



// button.addEventListener('click', function () {
//     body.style.backgroundColor = `rgb(${r()},${g()},${b()})`
// })

// button.addEventListener('click', function () {
//     h1.innerHTML = `rgb(${r()}, ${g()}, ${b()})`
// })

const h1 = document.querySelector('#rgb')
const h2 = document.querySelectorAll('h2')
const button = document.querySelectorAll('button')
const body = document.querySelector('body')

const newColor = function () {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    return `rgb(${r}, ${g}, ${b})`
}


for (let buttons of button) {
    buttons.addEventListener('click', function () {
        this.style.backgroundColor = newColor();
        this.style.color = newColor();
    })
}

for (let h2s of h2) {
    h2s.addEventListener('click', colorize)

}

function colorize() {
    this.style.backgroundColor = newColor()
    this.style.color = newColor()
}