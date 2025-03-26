let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let tied = document.querySelector("#tied");

let turnO = true;       //playerx playerO

const WinPttern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => 
    {
        if(turnO)
        {
            box.innerText = "O";
            turnO = false;
        }
        else
        {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        CheckWinner();
    });

});

const disableBoxes = () =>{
    for(let box of boxes)
    {
        box.disabled = true;
    }
}

const enableBoxes = () =>{
    for(let box of boxes)
    {
        box.disabled = false;
        box.innerText = "";
    }
}

const resetGame = () =>{
    
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

const showWinner = (winner) =>
{
   
        msg.innerText = `Congratulations ,Winner is ${winner}`;
        msgContainer.classList.remove("hide");
        disableBoxes();       
};

const CheckWinner = () => 
{
    for(let Pattern of WinPttern)
    {
        let pos1Val = boxes[Pattern[0]].innerText;
        let pos2Val = boxes[Pattern[1]].innerText;
        let pos3Val = boxes[Pattern[2]].innerText;

        if(pos1Val !=  "" && pos2Val != "" && pos3Val != "")
        {
            if(pos1Val === pos2Val && pos2Val === pos3Val)
            {
                showWinner(pos1Val);
            }
        }
    }

    
};
resetbtn.addEventListener("click",resetGame);

newGameBtn.addEventListener("click",resetGame);

