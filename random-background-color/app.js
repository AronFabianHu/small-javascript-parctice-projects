

const r = function () { return Math.floor(Math.random() * 256) };
const g = function () { return Math.floor(Math.random() * 256) };
const b = function () { return Math.floor(Math.random() * 256) };

const h1 = document.querySelector('#rgb')
const button = document.querySelector('#colorbtn')
const body = document.querySelector('body')



button.addEventListener('click', function () {
    body.style.backgroundColor = `rgb(${r()},${g()},${b()})`
})

button.addEventListener('click', function () {
    h1.innerHTML = `rgb(${r()}, ${g()}, ${b()})`
})

