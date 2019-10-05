import image from '../images/łolaboga.jpg'
export default tag => {
    const img = document.createElement('img')
    img.src = image
    document.querySelector(tag).appendChild(img)
}