let playerNumber = 0
let simbol ="X"
let positions = [0,0,0,0,0,0,0,0,0]
let exec = [false, false, false, false, false, false, false, false, false]
let blocks 
let elements = document.getElementsByClassName("buttons")
let win = false
for(var i=0; i<elements.length;i+=1){
     elements[i].addEventListener("click", function(){
        if(playerNumber%2 == 0){
            simbol = "X"
        }
        else{
            simbol = "O"
        }
     })
}
function putOne(){
    blocks = 0
    putSimbol()
}
function putTwo(){
    blocks = 1
    putSimbol()
}
function putThree(){
    blocks = 2
    putSimbol()
}
function putFour(){
    blocks = 3
    putSimbol()
}
function putFive(){
    blocks = 4
    putSimbol()
}
function putSix(){
    blocks = 5
    putSimbol()
}
function putSeven(){
    blocks = 6
    putSimbol()
}
function putEight(){
    blocks = 7
    putSimbol()
}
function putNine(){
    blocks = 8
    putSimbol()
}
function putSimbol(){
    if(win == false){
        if(exec[blocks] == false){
            elements[blocks].innerText = simbol
            if(simbol == "X"){
                positions[blocks] = 10
            }
            else{
                positions[blocks] = 1
            }
            exec[blocks] = true
            playerNumber+=1    
        }
    }
    teste()
}
function teste(){
    if(win != true){
        if (positions[0]+positions[1]+positions[2] == 30 ||
            positions[3]+positions[4]+positions[5] == 30 ||
            positions[6]+positions[7]+positions[8] == 30 ||
            positions[0]+positions[3]+positions[6] == 30 ||
            positions[1]+positions[4]+positions[7] == 30 ||
            positions[2]+positions[5]+positions[8] == 30 ||
            positions[0]+positions[4]+positions[8] == 30 ||
            positions[2]+positions[4]+positions[6] == 30){
                alert("X ganhou")
                win = true
            }
        if (positions[0]+positions[1]+positions[2] == 3 ||
            positions[3]+positions[4]+positions[5] == 3 ||
            positions[6]+positions[7]+positions[8] == 3 ||
            positions[0]+positions[3]+positions[6] == 3 ||
            positions[1]+positions[4]+positions[7] == 3 ||
            positions[2]+positions[5]+positions[8] == 3 ||
            positions[0]+positions[4]+positions[8] == 3 ||
            positions[2]+positions[4]+positions[6] == 3){
                alert("O ganhou")
                win = true
            }
        if(positions[0] != 0 & positions[1] != 0 & positions[2] != 0 & positions[3] != 0 & positions[4] != 0 & positions[5] != 0 & positions[6] != 0 & positions[7] != 0 & positions[8] != 0 & win == false){
            alert("VELHA")
            win = true
        }
    }
}
