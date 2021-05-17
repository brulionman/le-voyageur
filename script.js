const images = document.getElementById('images')
const leftBtn = document.getElementById('leftBtn')
const rightBtn = document.getElementById('rightBtn')
const img = document.querySelectorAll('#images img')

let idx = 0
let interval = setInterval(runSlideshow, 3000)
function runSlideshow() {
    idx++
    changeSlide()
    }

function changeSlide() {
    if(idx > img.length - 1) {
        idx = 0
    } else if ( idx < 0) {
        idx = img.length - 1
    }

    images.style.transform = `translateX(${-idx * 700}px)`
}