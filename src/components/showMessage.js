const showMessage = (message) => {
    const header = document.querySelector('.header')
    header.innerHTML = `<h1>${message}</h1>`
}
export default showMessage