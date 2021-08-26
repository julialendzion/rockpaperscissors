"use strict";
let winner = "computer";
let user = "paper";
let comp = "scissors";
let rand = Math.floor(Math.random() * 3) + 1;

window.addEventListener("DOMContentLoaded", start);

function start() {
  console.log("start");

  getPlayerChoice();
}

function getPlayerChoice() {
  console.log("getPlayerChoice");
  document.querySelector(".scissors").addEventListener("click", choiceScissors);
  document.querySelector(".paper").addEventListener("click", choicePaper);
  document.querySelector(".rock").addEventListener("click", choiceRock);
}

function choiceScissors() {
  console.log("choiceScissors");
  user = "scissors";
  makeRandomComputerChoice();
}

function choicePaper() {
  console.log("choiceScissors");
  user = "paper";
  makeRandomComputerChoice();
}

function choiceRock() {
  console.log("choiceScissors");
  user = "rock";
  makeRandomComputerChoice();
}

function makeRandomComputerChoice() {
  console.log("makeRandomComputerChoice");
  rand = Math.floor(Math.random() * 3) + 1;
  console.log(rand);
  document.querySelector("#player2").classList.add("shake");
  document.querySelector("#player1").classList.add("shake");
  document.querySelector("#player1").addEventListener("animationend", showAnimations);
}

function showAnimations() {
  console.log("showAnimations");

  if (user === "paper") {
    console.log("paper");
    document.querySelector("#player1").classList.remove("shake");
    document.querySelector("#player1").classList.add("paper");
  } else if (user === "scissors") {
    console.log("rock");
    document.querySelector("#player1").classList.remove("shake");
    document.querySelector("#player1").classList.add("scissors");
  } else {
    document.querySelector("#player1").classList.remove("shake");
    document.querySelector("#player1").classList.add("rock");
  }

  if (rand === 1) {
    document.querySelector("#player2").classList.remove("shake");
    document.querySelector("#player2").classList.add("paper");
    document.querySelector("#player2").addEventListener("animationend", determinWinner);
  } else if (rand === 2) {
    document.querySelector("#player2").classList.remove("shake");
    document.querySelector("#player2").classList.add("rock");
    document.querySelector("#player2").addEventListener("animationend", determinWinner);
  } else {
    document.querySelector("#player2").classList.remove("shake");
    document.querySelector("#player2").classList.add("scissors");
    document.querySelector("#player2").addEventListener("animationend", determinWinner);
  }
}
//, 3500);

// function showAnimations()

function determinWinner() {
  if ((user === "scissors" && rand === 1) || (user === "rock" && rand === 3) || (user === "paper" && rand === 2)) {
    winner = "user";
  } else if ((user === "scissors" && rand === 3) || (user === "paper" && rand === 1) || (user === "rock" && rand === 2)) {
    winner = "none";
  } else {
    winner = "computer";
  }

  console.log("determinWinner");
  if (winner === "computer") {
    setTimeout(showLose, 500);
  } else if (winner === "user") {
    setTimeout(showWin, 500);
  } else {
    setTimeout(showDraw, 500);
  }
}

function showWin() {
  console.log("showWin");
  document.querySelector("#win").classList.remove("hidden");
  setTimeout(clear, 1500);
}

function showLose() {
  console.log("showLose");
  document.querySelector("#lose").classList.remove("hidden");
  setTimeout(clear, 1500);
}

function showDraw() {
  console.log("showDraw");
  document.querySelector("#draw").classList.remove("hidden");

  setTimeout(clear, 1500);
}

function clear() {
  document.querySelector("#draw").classList.add("hidden");
  document.querySelector("#win").classList.add("hidden");
  document.querySelector("#lose").classList.add("hidden");

  document.querySelector("#player2").classList.remove("paper", "scissors", "rock");
  document.querySelector("#player1").classList.remove("paper", "scissors", "rock");
}
