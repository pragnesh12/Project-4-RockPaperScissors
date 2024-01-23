let getBtns = document.querySelectorAll("button");
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
const choices = ["rock", "paper", "scissors"];
let userWinningCounting = 0;
let computerWinningCounting = 0;
let uCount = document.getElementById("count1");
let cCount = document.getElementById("count2");
const images = document.querySelectorAll("img");
let setImgContainer1 = document.getElementsByClassName("sColContainer1");
let setImgContainer2 = document.getElementsByClassName("sColContainer2");
var rockUrl = "/images/The-Rock-PNG-Photo-fotor-2023122615557-removebg.png";
var rockImage = new Image();
rockImage.src = rockUrl;
let rockImage2 = new Image();
rockImage2.src = rockUrl;
var paperUrl = "/images/Fpaper-fotor-bg-remover-2023122712641.png";
var paperImage = new Image();
paperImage.src = paperUrl;
let paperImage2 = new Image();
paperImage2.src = paperUrl;
var scissorsUrl = "/images/Bolo_Juba_Keshari-removebg-preview.png";
var scissorsImage = new Image();
scissorsImage.src = scissorsUrl;
let scissorsImage2 = new Image();
scissorsImage2.src = scissorsUrl;
let mainS = document.getElementById("mainS");
let secondS = document.getElementById("secondS");
const forCom = ["rockImage", "paperImage", "scissorsImage"];
let resetButton = document.querySelector(".resetBtn");
let body = document.querySelector("hi");

getBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        const userChoice = btn.getAttribute("id");
        const selectImg = btn.getAttribute("name");
        playGame(userChoice);
        setUserSelectedImg(selectImg);

    })
})

const computerChoice = () => {
    const rnNumbers = Math.floor(Math.random() * 3);
    const computerChoiced = choices[rnNumbers];
    let randomImage = forCom[rnNumbers];
    randomImagesFromComputer(randomImage);
    return computerChoiced;
}

function randomImagesFromComputer(randomImage) {
    // console.log("ys",randomImage)
    if (randomImage == "rockImage") {
        if (1) {
            scissorsImage2.remove();
            paperImage2.remove();
        }
        secondS.appendChild(rockImage2);
        mainS.classList.add("SImageS2");
        secondS.classList.add("SImageS3");
    } else if (randomImage == "paperImage") {
        if (1) {
            rockImage2.remove();
            scissorsImage2.remove();
        }
        secondS.appendChild(paperImage2);
        mainS.classList.add("SImageS2");
        secondS.classList.add("SImageS2");
    } else {
        if (1) {
            rockImage2.remove();
            paperImage2.remove();
        }
        secondS.appendChild(scissorsImage2);
        mainS.classList.add("SImageS2");
        secondS.classList.add("SImageS2");
    }
}




function disableBtn() {
    getBtns.forEach((btn) => {
        btn.disabled = true;

    })
}





function setUserSelectedImg(selectImg) {
    if (selectImg == "rockImage") {
        if (1) {
            scissorsImage.remove();
            paperImage.remove();
        }
        mainS.appendChild(rockImage);
        // rock.removeAttribute("id");
        // rock.classList.add("SImageS");
        // disableBtn();
    } else if (selectImg == "paperImage") {
        if (1) {
            rockImage.remove();
            scissorsImage.remove();
        }
        mainS.appendChild(paperImage);
        // paper.removeAttribute("id");
        // paper.classList.add("SImageS");
        // disableBtn();
    } else {
        if (1) {
            rockImage.remove();
            paperImage.remove();
        }
        mainS.appendChild(scissorsImage);
        // scissors.removeAttribute("id");
        // scissors.classList.add("SImageS");
        // disableBtn();
    }

}



function playGame(userChoice, selectImg) {
    const finalComChoice = computerChoice();
    console.log("User choice = ", userChoice)
    console.log("computer choice = ", finalComChoice)
    switch (userChoice) {
        case "rock":
            if (finalComChoice == "scissors") {
                console.log("User Wins");
                userWinningCounting = userWinningCounting + 1;
                console.log("Ohhh(user) = ", userWinningCounting);
                uCount.innerText = userWinningCounting;
            } else if (finalComChoice == "paper") {
                console.log("Computer Wins");
                computerWinningCounting = computerWinningCounting + 1;
                cCount.innerText = computerWinningCounting;
                console.log("Ohhh(com) = ", userWinningCounting);
            } else {
                console.log("Match Tie");
            }
            break;
        case "paper":
            if (finalComChoice == "rock") {
                console.log("User Wins");
                userWinningCounting = userWinningCounting + 1;
                uCount.innerText = userWinningCounting;
                console.log("Ohhh(user) = ", userWinningCounting);
            } else if (finalComChoice == "scissors") {
                console.log("Computer Wins");
                computerWinningCounting = computerWinningCounting + 1;
                cCount.innerText = computerWinningCounting;
                console.log("Ohhh(com) = ", userWinningCounting);
            } else {
                console.log("Match Tie");
            }
            break;
        case "scissors":
            if (finalComChoice == "paper") {
                console.log("User Wins");
                userWinningCounting = userWinningCounting + 1;
                uCount.innerText = userWinningCounting;
                console.log("Ohhh(user) = ", userWinningCounting);
            } else if (finalComChoice == "rock") {
                console.log("Computer Wins");
                computerWinningCounting = computerWinningCounting + 1;
                cCount.innerText = computerWinningCounting;
                console.log("Ohhh(com) = ", userWinningCounting);
            } else {
                console.log("Match Tie");
            }
            break;
    };

}





resetButton.addEventListener("click", () => {
    document.location.reload();
})