let boxes = document.querySelectorAll(".box")
let turn1 = true

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
    });
});
