//for media queries
var x = window.matchMedia("(max-width: 920px)");

console.log("Welcome to Tic Tac Toe");
let music = new Audio("music.mp3");
let audioTurn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let isgameover = false;

let turn = "X";
//Function to change the turn
const changeTurn = () => {
  return turn === "X" ? "0" : "X";
};

//function to check win
const checkWin = () => {
  let boxtext = document.getElementsByClassName("boxtext");
  let win = [
    [0, 1, 2, 5, 5, 0],
    [3, 4, 5, 5, 15, 0],
    [6, 7, 8, 5, 25, 0],
    [0, 3, 6, -5, 15, 90],
    [1, 4, 7, 5, 15, 90],
    [2, 5, 8, 15, 15, 90],
    [0, 4, 8, 5, 15, 45],
    [2, 4, 6, 5, 15, 135],
  ];
  win.forEach((e) => {
    if (
      boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[2]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[0]].innerText !== ""
    ) {
      document.querySelector(".info").innerText =
        boxtext[e[0]].innerText + " Won";
      isgameover = true;
      document
        .querySelector(".imgBox")
        .getElementsByTagName("img")[0].style.width = "200px";
      gameover.play();
      document.querySelector(".line").style.width = `20vw`;
      temp1 = 2 * e[3];
      temp2 = 2 * e[4];
      document.querySelector(
        ".line"
      ).style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
    }
  });
};

//Game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((ele) => {
  let e = ele.querySelector(".boxtext");
  ele.addEventListener("click", () => {
    if (e.innerText === "") {
      e.innerText = turn;
      turn = changeTurn();
      audioTurn.play();
      if (x.matches) {
        queryWin();
      }else{
        checkWin();
      }
      if (!isgameover) {
        document.getElementsByClassName("info")[0].innerText =
          "Turn for " + turn;
      }
    }
  });
});

reset.addEventListener("click", (element) => {
  let e = document.querySelectorAll(".boxtext");
  Array.from(e).forEach((ele) => {
    ele.innerText = "";
  });
  isgameover = false;
  turn = "X";
  document.querySelector(".line").style.width = `0`;
  document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
  document.querySelector(".imgBox").getElementsByTagName("img")[0].style.width =
    "0";
});

const queryWin = () => {
  let boxtext = document.getElementsByClassName("boxtext");
  let win = [
    [0, 1, 2, 10,10, 0],
    [3, 4, 5, 10,30, 0],
    [6, 7, 8, 10, 50, 0],
    [0, 3, 6, 5, 30, 90],
    [1, 4, 7, 10, 30, 90],
    [2, 5, 8, 30, 30, 90],
    [0, 4, 8, 10, 30, 45],
    [2, 4, 6, 10, 30, 135],
  ];
  win.forEach((e) => {
    if (
      boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[2]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[0]].innerText !== ""
    ) {
      document.querySelector(".info").innerText =
        boxtext[e[0]].innerText + " Won";
      isgameover = true;
      document
        .querySelector(".imgBox")
        .getElementsByTagName("img")[0].style.width = "200px";
      gameover.play();
      document.querySelector(".line").style.width = `40vw`;
      temp1 = e[3];
      temp2 = e[4];
      document.querySelector(
        ".line"
      ).style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
    }
  });
};