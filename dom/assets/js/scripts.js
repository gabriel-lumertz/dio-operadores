function changeMode() {
    changeClass()
    changeText()

}

const darkModeClass = 'dark-mode'

const body = document.querySelector('body')
const footer = document.querySelector('footer')
const button = document.querySelector('button')

function changeClass() {
    body.classList.toggle(darkModeClass)
    footer.classList.toggle(darkModeClass)
    button.classList.toggle(darkModeClass)
}

const h1 = document.querySelector('h1')

function changeText() {
    const darkMode = 'Dark Mode'
    const lightMode = 'Light Mode'

    if(body.classList.contains(darkModeClass)) {
        button.innerHTML = lightMode
        h1.innerHTML = darkMode + ' ON'
        return
    }
    button.innerHTML = darkMode
    h1.innerHTML = lightMode + ' ON'
}



button.addEventListener('click', changeMode)