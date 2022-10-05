/* Desenvolva sua lógica aqui ... */
// <!-- <li class="music-card">
// <figure>
//   <img src="../../assets/img/1.jpg" alt="">
// </figure>
// <div class="info">
//   <p><span>Banda</span><span>Ano</span></p>
//   <p>Título</p>
//   <p><span>Preço</span><span><button>Comprar</button></span></p>
// </div>
// </li> -->
function listMusic(array){ 
    const ul = document.querySelector('.list-music')
    
   
    array.forEach((element) => {
        let musica = element
        
        
        let template = criarTemplate(musica)

        ul.appendChild(template)
    });
    
}
listMusic(products)

function criarTemplate(objeto){
    let titulo = objeto.title
    let genero = objeto.category
    let banda = objeto.band
    let ano = objeto.year
    let image = objeto.img
    let preco = objeto.price

    let li = document.createElement('li')
    li.classList.add('music-card')

    let figure = document.createElement('figure')
    let img = document.createElement('img')
    img.src = image
    img.alt = titulo

    let divInfo = document.createElement('div')
    divInfo.classList.add('info')

    let pInfo = document.createElement('p')
    pInfo.classList = 'pInfo'
    let infoBand = document.createElement('span')
    infoBand.innerText = banda
    let infoAno = document.createElement('span')
    infoAno.innerText = ano

    let pTitulo = document.createElement('p')
    pTitulo.classList = 'p-title'
    pTitulo.innerText = titulo

    let pPreco = document.createElement('p')
    pPreco.classList = 'pPreco'
    let infoPreco = document.createElement('span')
    infoPreco.classList = 'tag-price'
    infoPreco.innerText = `R$${preco}.00`
    let buttonComprar = document.createElement('button')
    buttonComprar.classList = 'buy-button'
    buttonComprar.innerText = 'Comprar'

    pPreco.append(infoPreco,buttonComprar)
    pInfo.append(infoBand,infoAno)
    divInfo.append(pInfo,pTitulo,pPreco)
    figure.appendChild(img)
    li.append(figure,divInfo)

    return li
}