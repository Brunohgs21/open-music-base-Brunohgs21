const contador = document.querySelector('#contador')



const musicList = document.querySelector('.list-music')
function eventFilter() {
    const filterButtons = document.querySelectorAll('.filter')
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            musicList.innerHTML = ''
            const filter = button.innerText



            if (filter == 'Todos') {
                listMusic(products)
            }
            const filteredMusic = filterMusic(filter)
            listMusic(filteredMusic)
        })
    })

}
eventFilter()



function filterMusic(text) {
    const musicFiltered = products.filter(music => music.category == text)
    return musicFiltered
}

function sliderFilter() {
    const input = document.querySelector('.slider')
    input.addEventListener('change', (event) => {
        musicList.innerText = ''
        let valor = event.target.value
        
        contador.innerText = valor

        let filtro = products.filter((music) => {
            return music.price <= valor
        })
        listMusic(filtro)
    })
}
sliderFilter()