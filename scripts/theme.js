/* Desenvolva sua lógica aqui ... */
function darkMode() {
    const dmButton = document.querySelector('#dark-mode')
    const dmIcon = document.querySelector('#dm-icon')
    const html = document.querySelector('html')

    dmButton.addEventListener('click', () => {
        html.classList.toggle('dark-mode')
        dmIcon.classList.toggle('text-white')

        const dmPref = localStorage.getItem('darkmode')

        if (!dmPref) {
            localStorage.setItem('darkmode', true)
        }else{
            localStorage.removeItem('darkmode')
        }

        if (dmIcon.classList.contains('text-white')) {
            dmIcon.src = '../../assets/img/sun.png'
        } else {
            dmIcon.src = '../../assets/img/moon.png'
        }
    })


}
darkMode()