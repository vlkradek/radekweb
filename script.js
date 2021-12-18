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


let right = document.getElementById('right')
let left = document.getElementById('left')
let sliding = document.getElementById('sliding')
let pathLeft = document.getElementById('path-left')
let pathRight = document.getElementById('path-right')
let counter  = 0
let counterMax  = 100
let counterMin  = 0

const mediaQuery = window.matchMedia('(max-width: 1200px)')
// Check if the media query is true
if (mediaQuery.matches) {
    // Then trigger an alert
    counterMax = 300
}
pathRight.style.transition = '0.5s'
pathLeft.style.transition = '0.5s'
pathLeft.style.fill = '#7c7c7c'


right.onclick = function goRight(){
    pathLeft.style.fill = '#cacaca'
    if(counter < counterMax){
        counter = counter + 100;
    }
    sliding.style.marginLeft = '-' + counter + '%'
    if (counter == counterMax){
        pathRight.style.fill = '#7c7c7c'
    }
}
left.onclick = function goLeft() {
    pathRight.style.fill = '#cacaca'
    if (counter > 0) {
        counter = counter - 100;
    }
    sliding.style.marginLeft = '-' + counter + '%'
    if (counter == counterMin){
        pathLeft.style.fill = '#7c7c7c'
    }
}

