const container = document.getElementById('container')
console.log(container)
const url = "https://jsonplaceholder.typicode.com/albums/2/photos"


const init = async () => {

    const res = await fetch(url)
    const data = await res.json()
    console.log(data)

    data.forEach(item => {

        const html = `<div class="square">${item.title} <img src=${item.thumbnailUrl} /></div>`

        document.body.insertAdjacentHTML('afterbegin', html)

    })

    const squares = [...document.querySelectorAll('.square')]

    squares.forEach(square => {

        square.addEventListener('click', () => square.remove())

    })

}

init()