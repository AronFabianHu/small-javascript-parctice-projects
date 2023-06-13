const form = document.querySelector('form');
const product = document.querySelector('#product')
const quantity = document.querySelector('#qty')
const targetElement = document.querySelector('#list')

form.addEventListener('submit', function (e) {
    e.preventDefault();
    targetElement.insertAdjacentHTML('beforeend', `<li> ${quantity.value} ${product.value} </li>`)
    product.value = ''
    quantity.value = ''
})
