const MAIN_CONTAINER = document.querySelector(".main_container");
const AGAIN_BUTTON = document.getElementById("again");
const CORRECT_NUMBER = document.getElementsByClassName("number");
const INPUT_ANSWER = document.getElementById("check_number");
const CHECK_NUMBER_BUTTON = document.getElementById("check_number_btn");
const GUESS_MESSAGE = document.getElementsByClassName("start_guessing");
const SCORE_NUMBER = document.getElementsByClassName("score_number");
const HIGHT_SCORE_NUMBER =
  document.getElementsByClassName("hight_score_number");

const RANDOM_NUMBER = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

let TOTAL_SCORE = 20;
let HIGHT_SCORE = 0;

SCORE_NUMBER[0].textContent = TOTAL_SCORE;
HIGHT_SCORE_NUMBER[0].textContent = HIGHT_SCORE;

const randomIndex = Math.floor(Math.random() * RANDOM_NUMBER.length);
let secretNumber = RANDOM_NUMBER[randomIndex - 1];
console.log(secretNumber);

CHECK_NUMBER_BUTTON.addEventListener("click", () => {
  const guess = Number(INPUT_ANSWER.value);

  if (guess === randomIndex) {
    MAIN_CONTAINER.style.backgroundColor = "green";
    GUESS_MESSAGE[0].textContent = "🎉 Correct Number!";
    CORRECT_NUMBER[0].textContent = secretNumber;
    if (TOTAL_SCORE > HIGHT_SCORE) {
      HIGHT_SCORE = TOTAL_SCORE;
      HIGHT_SCORE_NUMBER[0].textContent = HIGHT_SCORE;
    }
  } else {
    if (SCORE_NUMBER[0].textContent > 1) {
      TOTAL_SCORE--;
      SCORE_NUMBER[0].textContent = TOTAL_SCORE;
      GUESS_MESSAGE[0].textContent =
        guess > secretNumber ? "📈 Too high!" : "📉 Too low!";
    } else {
      MAIN_CONTAINER.style.backgroundColor = "red";
      GUESS_MESSAGE[0].textContent = "💥 You lost the game!";
      SCORE_NUMBER[0].textContent = 0;
    }
  }
});

AGAIN_BUTTON.addEventListener("click", () => {
  TOTAL_SCORE = 20;
  SCORE_NUMBER[0].textContent = TOTAL_SCORE;
  MAIN_CONTAINER.style.backgroundColor = "";
  CORRECT_NUMBER[0].textContent = "?";
  INPUT_ANSWER.value = "";
});
