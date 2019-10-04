import showMessage from './components/showMessage'
import './css/style.css'

const App = () => {
    showMessage('Hello world!')
}

window.addEventListener('DOMContentLoaded', App)