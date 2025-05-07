const AGAIN_BUTTON = document.getElementById("again");
const CORRECT_NUMBER = document.getElementsByClassName("number");
const INPUT_ANSWER = document.getElementById("check_number");
const CHECK_NUMBER_BUTTON = document.getElementById("check_number_btn");
const GUESS_MESSAGE = document.getElementsByClassName("start_guessing");
const SCORE_NUMBER = document.getElementsByClassName("score_number");
const HIGHT_SCORE_NUMBER =
  document.getElementsByClassName("hight_score_number");

const RANDOM_NUMBER = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

let TOTAL_SCORE = 20;
let HIGHT_SCORE = 0;

SCORE_NUMBER[0].textContent = TOTAL_SCORE;
HIGHT_SCORE_NUMBER[0].textContent = HIGHT_SCORE;

const randomIndex = Math.floor(Math.random() * RANDOM_NUMBER.length - 1);
let secretNumber = RANDOM_NUMBER[randomIndex];
console.log(secretNumber);


CHECK_NUMBER_BUTTON.addEventListener("click", () => {
    const guess = Number(INPUT_ANSWER.value);

    if (guess === randomIndex) {
        GUESS_MESSAGE.textContent = "Correct Number!"
        CORRECT_NUMBER[0].textContent = secretNumber;
        console.log("correct");
    }else{
        GUESS_MESSAGE.textContent = "to low"
        console.log("incorrect");
    }
    
});