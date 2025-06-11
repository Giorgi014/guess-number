beforeEach(() => {
  document.body.innerHTML = `
      <div class="main_container"></div>
      <div id="again"></div>
      <div id="number"></div>
      <input id="check_number" />
      <button id="check_number_btn"></button>
      <p id="start_guessing"></p>
      <span id="score_number"></span>
      <span id="hight_score_number"></span>
    `;
});
const { initGame } = require("../app");

// const MAIN_CONTAINER = document.querySelector(".main_container");
// const AGAIN_BUTTON = document.getElementById("again");
// const CORRECT_NUMBER = document.getElementById("number");
// const INPUT_ANSWER = document.getElementById("check_number");
// const CHECK_NUMBER_BUTTON = document.getElementById("check_number_btn");
// const GUESS_MESSAGE = document.getElementById("start_guessing");
// const SCORE_NUMBER = document.getElementById("score_number");
// const HIGHT_SCORE_NUMBER = document.getElementById("hight_score_number");

let TOTAL_SCORE = 20;
let HIGHT_SCORE = 0;
const MAX_NUMBER = 20;

// SCORE_NUMBER.textContent = TOTAL_SCORE;
// HIGHT_SCORE_NUMBER.textContent = HIGHT_SCORE;

test("function test", () => {
  expect(typeof initGame).toEqual("function");
});

test("", () => {
  expect(TOTAL_SCORE).toBe(20);
  expect(HIGHT_SCORE).toBe(0);
  expect(MAX_NUMBER).toBe(20);
});

// test("", () => {
//   expect(SCORE_NUMBER.textContent).toBe(20);
// });

test("initGame does not throw error", () => {
  expect(() => initGame()).not.toThrow();
});

test("should initialize score to 20", () => {
  initGame();
  const SCORE_NUMBER = document.getElementById("score_number").textContent;
  expect(SCORE_NUMBER).toBe("20");
});

test("should decrease score on wrong guess", () => {
  initGame();
  const INPUT_ANSWER = document.getElementById("check_number");
  const CHECK_NUMBER_BUTTON = document.getElementById("check_number_btn");
  const SCORE_NUMBER = document.getElementById("score_number");

  INPUT_ANSWER.value = "0";
  CHECK_NUMBER_BUTTON.click();

  expect(Number(SCORE_NUMBER.textContent)).toBe(19);
  // expect(Number(SCORE_NUMBER.textContent)).toBe(18);
});

test("should generate random number between 1 and 20", () => {
  let secretNumber = Math.floor(Math.random() * MAX_NUMBER) + 1;
  expect(secretNumber).toBeGreaterThan(0);
  expect(secretNumber).toBeLessThanOrEqual(20);
});
