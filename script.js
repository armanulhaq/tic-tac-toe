let boxes = document.querySelectorAll(".box")
let turn1 = true
let winning_patterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
let gameStatus = document.getElementById("game-status")
let rematch = document.getElementById("reset")

boxes.forEach(box => {
    box.addEventListener("click", ()=>{
        if (turn1) {
            box.innerText = "X"
            turn1 = false
        } else {
            box.innerText = "O"
            turn1 = true
        }
        box.disabled = true;
        checkWinner()
    });
});

const checkWinner = () => {
    for(let pattern of winning_patterns){
        let pos1 = boxes[pattern[0]].innerText
        let pos2 = boxes[pattern[1]].innerText
        let pos3 = boxes[pattern[2]].innerText
        if(pos1!='' && pos2!='' && pos3!='') {
            if(pos1 === pos2 && pos2=== pos3) {
                gameStatus.innerHTML = `"${pos1}" is the winner`
            }
        }
    }
}


rematch.addEventListener("click", ()=> {
    location.reload();
})
