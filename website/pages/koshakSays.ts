let gotohome = document.getElementById("home") as HTMLButtonElement;
let usernameDiv = document.querySelector("#welcomeDiv") as HTMLDivElement;
let start = document.querySelector("#startButton") as HTMLButtonElement;
let scoreDiv = document.querySelector("#scoreDiv") as HTMLDivElement;
let fishImg = document.querySelector("#fishImg") as HTMLImageElement;
let panelButtons = document.querySelectorAll(".panelButton") as NodeListOf<HTMLButtonElement>;
let logout = document.getElementById("logoutbutton") as HTMLButtonElement;

import { send } from "../utilities";
let userId = localStorage.getItem("userId");
console.log(userId);
let userExists = false;
if (userId != null) {
  userExists = await send("userExists", userId) as boolean;
}

console.log(userExists);

if (userExists) {
  usernameDiv.style.display = "block";


  let username = await send("getUsername", userId)
  usernameDiv.innerText = "Logged In as " + username;
}


gotohome.onclick = function () {
  alert("you go to home page")
  window.location.href = "/website/pages/index.html";
}

let panelHistory: number[] = [];
let panelHistoryI = 0;
let score = 0;


start.onclick = function () {
  updateScore(0);
  start.disabled = true;
  startRound();
}


let updateScore = function (newScore: number) {
  score = newScore;
  scoreDiv.innerText = "Score: " + newScore;
}

let startRound = async function () {
  activate(false);

  let panelI = Math.floor(Math.random() * 4);

  panelHistory.push(panelI);

  panelHistoryI = 0;

  for (let i = 0; i < panelHistory.length; i++) {
    await flash(panelHistory[i], 200);
    await wait(100);
  }

  activate(true);
}

let activate = function (activate: boolean) {
  for (let i = 0; i < panelButtons.length; i++) {
    panelButtons[i].disabled = !activate;
  }
}

let flash = async function (panelI: number, ms: number) {
  fishImg.style.display = "block";

  if (panelI == 0) {
    fishImg.style.left = "0px";
    fishImg.style.top = "0px";
  }
  else if (panelI == 1) {
    fishImg.style.left = "310px";
    fishImg.style.top = "0px";
  }
  else if (panelI == 2) {
    fishImg.style.left = "0px";
    fishImg.style.top = "310px";
  }
  else if (panelI == 3) {
    fishImg.style.left = "310px";
    fishImg.style.top = "310px";
  }

  await wait(ms);

  fishImg.style.display = "none";
}

let wait = async function (ms: number) {
  return await new Promise((resolve) => setTimeout(() => resolve(null), ms));
}


for (let i = 0; i < panelButtons.length; i++) {
  panelButtons[i].onclick = function () {
    userclick(i);
  }
}

let userclick = async function (panelI: number) {
  activate(false);

  if (panelI == panelHistory[panelHistoryI]) {
    await flash(panelI, 200);

    panelHistoryI++;

    if (panelHistoryI == panelHistory.length) {
      updateScore(score + 1);

      await wait(500);

      await startRound();
    }

    activate(true);
  }
  else {
    panelHistoryI = 0;
    panelHistory = [];
    for (let i = 0; i < 3; i++) {
      await flash(0, 50);
      await flash(1, 50);
      await flash(2, 50);
      await flash(3, 50);
    }
    start.disabled = false;

    alert(usernameDiv.innerText +"your score is "+ score);
    location.href = "fail.html";

    activate(false);
  }
}

activate(false);


logout.onclick = function () {
  localStorage.removeItem("userId");
  alert("you did logout");
  location.href = "koshakSays.html";
}