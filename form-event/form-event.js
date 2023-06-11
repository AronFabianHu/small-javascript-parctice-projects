const form = document.querySelector('#shelter')
const txtInput = document.querySelector('#txtinput')
const list = document.querySelector('#list')

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const listName = txtInput.value
    const newLi = document.createElement("li")

    newLi.innerText = listName
    list.append(newLi)

    txtInput.value = ''
})



