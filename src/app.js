import showMessage from './components/showMessage'
import './css/style.css'
import addImage from './components/image'

const App = () => {
    showMessage('Ru ru ru ru ru rurkowce!')
    addImage('.header')
}

window.addEventListener('DOMContentLoaded', App)