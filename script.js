let blackoutLeft = document.getElementById('blackout-left')
let blackoutRight = document.getElementById('blackout-right')

blackoutLeft.style.right = '50%'
blackoutRight.style.left = '50%'

function jump (aim){
    blackoutLeft.style.right = '50%'
    blackoutRight.style.left = '50%'
    setTimeout(function (){
        location.replace(aim)
    }, 800)
}

function loadPage(){
    blackoutLeft.style.right = '100%'
    blackoutRight.style.left = '100%'
}

let navigation = document.getElementById('navigation')
navigation.innerHTML = `<p class="navItem" onclick='jump("about.html")'><i class='bx bx-chevron-right'></i>about me</p>
                        <p class="navItem" onclick='jump("tools.html")'><i class='bx bx-chevron-right'></i>tools</p>
                        <p class="navItem" onclick='jump("portfolio.html")'><i class='bx bx-chevron-right'></i>portfolio</p>
                        <p class="navItem" onclick='jump("contact.html")'><i class='bx bx-chevron-right'></i>contact me</p>`



let navButton = document.getElementById('navButton')
let nav = document.getElementById('navigation')

let i = 0

nav.style.left = '100%'
// navButton.innerHTML = closed
let first = document.getElementById('first')
let second = document.getElementById('second')
let third = document.getElementById('third')

navButton.onclick = function (){
    if (i === 0){
        nav.style.left = '0%'
        first.style.transform = 'rotate(45deg)'
        first.style.top = '48%'
        second.style.left = '100%'
        third.style.transform = 'rotate(-45deg)'
        third.style.top = '48%'
        i = 1
    } else if (i === 1){
        nav.style.left = '100%'
        first.style.transform = 'rotate(0deg)'
        first.style.top = '0%'
        second.style.left = '0%'
        third.style.transform = 'rotate(0deg)'
        third.style.top = '80%'
        i = 0
    }
}


// let right = document.getElementById('right')
// let left = document.getElementById('left')
// let sliding = document.getElementById('sliding')
// let pathLeft = document.getElementById('path-left')
// let pathRight = document.getElementById('path-right')
// let counter  = 0

// right.onclick = function goRight(){
//     if(counter < 300){
//         counter = counter + 100;
//     }
//     sliding.style.marginLeft = '-' + counter + '%'
// }
// left.onclick = function goLeft() {
//     if (counter > 0) {
//         counter = counter - 100;
//     }
//     sliding.style.marginLeft = '-' + counter + '%'
// }


let playbutton = document.getElementById('playbutton')
let portOverflow = document.getElementById('portfolio-overflow')
let slideshow = document.getElementById('slideshow')
let closeButton = document.getElementById('close-portfolio')

let windowWidth = window.innerWidth + window.innerWidth / 2
let windowHeight = window.innerHeight + window.innerHeight / 2

console.log(windowWidth)

if (windowHeight >= windowWidth){
    playbutton.onclick = function (){
        portOverflow.style.display = 'initial'
        portOverflow.style.zIndex = '55555'
        portOverflow.style.width = windowHeight + 'px'
        portOverflow.style.height = windowHeight + 'px'
        slideshow.style.display = 'flex'
        closeButton.style.display = 'initial'
        playbutton.style.opacity = '0'
        setTimeout(function (){
            slideshow.style.opacity = '1'
            closeButton.style.opacity = '1'
        }, 2000)
    }
    closeButton.onclick = function (){
        slideshow.style.opacity = '0'
        closeButton.style.opacity = '0'
        portOverflow.style.width = '5px'
        portOverflow.style.height = '5px'
        portOverflow.style.zIndex = '0'
        setTimeout(function (){
            playbutton.style.opacity = '1'
            slideshow.style.display = 'none'
        }, 2300)
    }
} else {
    playbutton.onclick = function (){
        portOverflow.style.display = 'initial'
        portOverflow.style.zIndex = '55555'
        portOverflow.style.width = windowWidth + 'px'
        portOverflow.style.height = windowWidth + 'px'
        slideshow.style.display = 'flex'
        closeButton.style.display = 'initial'
        playbutton.style.opacity = '0'
        setTimeout(function (){
            slideshow.style.opacity = '1'
            closeButton.style.opacity = '1'
        }, 2000)
    }
    closeButton.onclick = function (){
        slideshow.style.opacity = '0'
        closeButton.style.opacity = '0'
        portOverflow.style.width = '5px'
        portOverflow.style.height = '5px'
        portOverflow.style.zIndex = '5'
        setTimeout(function (){
            playbutton.style.opacity = '1'
            slideshow.style.display = 'none'
        }, 2300)
    }
}



// portOverflow.addEventListener(function (){
//     let windowWidth = window.innerWidth + 150
//     console.log(windowWidth)
// } )
