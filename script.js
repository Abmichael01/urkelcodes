let nav = document.querySelector("nav")
let menu = document.querySelector(".menu")
let overlay = document.querySelector(".overlay")
let body = document.querySelector("body")

menu.addEventListener("click", ()=>{
    if (menu.innerHTML === "☵"){
        menu.innerHTML = "✖"
    }else{
        menu.innerHTML = "☵"
    }

    nav.classList.toggle('toggle-nav')
    overlay.classList.toggle("hide")
    body.classList.toggle("no-scroll")
})

overlay.addEventListener("click", ()=>{
    if (menu.innerHTML === "☵"){
        menu.innerHTML = "✖"
    }else{
        menu.innerHTML = "☵"
    }
    nav.classList.toggle('toggle-nav')
    overlay.classList.toggle("hide")
    body.classList.toggle("no-scroll")
})