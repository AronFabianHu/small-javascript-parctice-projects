// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

let container = document.querySelector('#container')

for (let i = 1; i <= 1010; i++) {

    const pokemon = document.createElement('div');
    const label = document.createElement('span')
    label.innerText = `#${i}`



    const img = document.createElement('img')
    img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`

    pokemon.appendChild(img)
    pokemon.appendChild(label)
    container.appendChild(pokemon)


    pokemon.classList.add('pokemon')
    img.classList.add('img')
}