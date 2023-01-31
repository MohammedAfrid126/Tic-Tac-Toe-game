const turnAudio = new Audio("ting.mp3");
let turn = "X";
let gameOver = false;

//fucntion for the change of turn
const changeTurn = () => {
    return turn === "X"?"O":"X";
}

//Function to Check Win
const checkWin = () => {
    let boxText = document.getElementsByClassName("boxText");
    let wins = [
        [0,1,2,5,5,0],
        [3,4,5,5,15,0],
        [6,7,8,5,25,0],
        [0,3,6,-5,15,90],
        [1,4,7,5,15,90],
        [2,5,8,15,15,90],
        [0,4,8,5,15,45],
        [2,4,6,5,15,135],
    ]
    wins.forEach(e => {
        if ((boxText[e[0]].innerHTML === boxText[e[1]].innerHTML)&&(boxText[e[2]].innerHTML === boxText[e[1]].innerHTML)&& boxText[e[0]].innerHTML !== "") {
            document.querySelector(".info").innerHTML = boxText[e[0]].innerHTML + " has Won"
            gameOver = true;
            document.querySelector(".imageBox").getElementsByTagName("img")[0].style.width= "100%";
            document.querySelector(".imageBox").getElementsByTagName("img")[1].style.width= "0%";
            document.querySelector(".won").getElementsByTagName("img")[0].style.width= "100%";
            document.querySelector(".line").style.width = "20vw"
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
        }
    });
}

//Game Logic
let boxes  = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
    let boxText = element.querySelector('.boxText');
    element.addEventListener("click",() =>{
        if(boxText.innerHTML === ""){
            boxText.innerHTML = turn;
            turn = changeTurn();
            turnAudio.play();
            checkWin();
            if (!gameOver) {
                document.getElementsByClassName("info")[0].innerHTML = "Turn for " + turn;
            }
        }
    })
});


//Reser Button

reset.addEventListener("click",() =>{
    let boxes = document.querySelectorAll(".boxText");
    Array.from(boxes).forEach((element)=>{
        element.innerHTML = ""
    })
    turn = "X";
    gameOver  = false;
    document.getElementsByClassName("info")[0].innerHTML = "Turn for " + turn;
    document.querySelector(".line").style.width = "0vw"
    document.querySelector(".imageBox").getElementsByTagName("img")[0].style.width= "0%";
    document.querySelector(".imageBox").getElementsByTagName("img")[1].style.width= "100%";
    document.querySelector(".won").getElementsByTagName("img")[0].style.width= "0%";
});