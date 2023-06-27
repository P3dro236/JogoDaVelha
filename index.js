
const btn = document.getElementById("btn")
const btn2 = document.getElementById("btn2")
let txt = document.getElementById("txt")
btn.addEventListener("click", clicar)
function clicar(){
    const audio =  new Audio("sons/music.mp3")
    audio.play()
    txt.style.color = "white"
    btn.style.display = "none"
    btn2.style.display = "block"
}

btn2.addEventListener("click", clicar2)
function clicar2(){
    txt.innerHTML = "CUZINHO HJ??"
    btn2.style.display = "none";
}


