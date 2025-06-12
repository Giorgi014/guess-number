const fs = require("fs");
const path = require("path");
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
const { initGame } = require("../app");

beforeEach(() => {
  document.body.innerHTML = html.toString();
});

let TOTAL_SCORE = 20;
let HIGHT_SCORE = 0;
const MAX_NUMBER = 20;

test("function test", () => {
  expect(typeof initGame).toEqual("function");
});

test("", () => {
  expect(TOTAL_SCORE).toBe(20);
  expect(HIGHT_SCORE).toBe(0);
  expect(MAX_NUMBER).toBe(20);
});

test("initGame does not throw error", () => {
  expect(() => initGame()).not.toThrow();
});

test("should initialize score to 20", () => {
  initGame();
  const SCORE_NUMBER = document.getElementById("score_number");
  expect(SCORE_NUMBER.textContent).toBe("20");
});

test("should generate random number between 1 and 20", () => {
  let secretNumber = Math.floor(Math.random() * MAX_NUMBER) + 1;
  expect(secretNumber).toBeGreaterThan(0);
  expect(secretNumber).toBeLessThanOrEqual(20);
});

test("should check correct answer", () => {
  initGame();
  const MAIN_CONTAINER = document.querySelector(".main_container");
  const CORRECT_NUMBER = document.getElementById("number");
  const INPUT_ANSWER = document.getElementById("check_number");
  const CHECK_NUMBER_BUTTON = document.getElementById("check_number_btn");
  const GUESS_MESSAGE = document.getElementById("start_guessing");

  const correctNumber = 10;
  INPUT_ANSWER.value = correctNumber;

  jest.spyOn(Math, "random").mockReturnValue((correctNumber - 1) / 20);

  initGame();
  CHECK_NUMBER_BUTTON.click();

  expect(MAIN_CONTAINER.style.backgroundColor).toBe("green");
  expect(GUESS_MESSAGE.textContent).toBe("🎉 Correct Number!");
  expect(CORRECT_NUMBER.textContent).toBe(correctNumber.toString());
});

test("should reset button", () => {
  initGame();

  const MAIN_CONTAINER = document.querySelector(".main_container");
  const AGAIN_BUTTON = document.getElementById("again");
  const CORRECT_NUMBER = document.getElementById("number");
  const INPUT_ANSWER = document.getElementById("check_number");
  const SCORE_NUMBER = document.getElementById("score_number");

  AGAIN_BUTTON.click();
  expect(SCORE_NUMBER.textContent).toBe("20");
  expect(MAIN_CONTAINER.style.backgroundColor).toBe("");
  expect(CORRECT_NUMBER.textContent).toBe("?");
  expect(INPUT_ANSWER.value).toBe("");
});

test("should game lose when score reaches 0", () => {
  initGame();

  const MAIN_CONTAINER = document.querySelector(".main_container");
  const CHECK_NUMBER_BUTTON = document.getElementById("check_number_btn");
  const SCORE_NUMBER = document.getElementById("score_number");
  const GUESS_MESSAGE = document.getElementById("start_guessing");

  for (let i = 0; i < 20; i++) {
    CHECK_NUMBER_BUTTON.click();
  }

  expect(MAIN_CONTAINER.style.backgroundColor).toBe("red");
  expect(SCORE_NUMBER.textContent).toBe("0");
  expect(GUESS_MESSAGE.textContent).toBe("💥 You lost the game!");
});

test("should display is `To Hight`", () => {
  jest.spyOn(Math, "random").mockReturnValue(0.4);

  initGame();

  const SCORE_NUMBER = document.getElementById("score_number");
  const INPUT_ANSWER = document.getElementById("check_number");
  const GUESS_MESSAGE = document.getElementById("start_guessing");
  const CHECK_NUMBER_BUTTON = document.getElementById("check_number_btn");

  INPUT_ANSWER.value = 10;

  CHECK_NUMBER_BUTTON.click();

  expect(SCORE_NUMBER.textContent).toBe("19");
  expect(GUESS_MESSAGE.textContent).toBe("📈 Too high!");
});

test("should display is `To Low`", () => {
  jest.spyOn(Math, "random").mockReturnValue(0.4);

  initGame();

  const SCORE_NUMBER = document.getElementById("score_number");
  const INPUT_ANSWER = document.getElementById("check_number");
  const GUESS_MESSAGE = document.getElementById("start_guessing");
  const CHECK_NUMBER_BUTTON = document.getElementById("check_number_btn");

  INPUT_ANSWER.value = 4;

  CHECK_NUMBER_BUTTON.click();

  expect(SCORE_NUMBER.textContent).toBe("19");
  expect(GUESS_MESSAGE.textContent).toBe("📉 Too low!");
});