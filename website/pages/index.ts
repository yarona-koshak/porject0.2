let toSignUpPage = document.getElementById("signupbutton") as HTMLButtonElement;
let toLoginPage = document.getElementById("loginbutton")as HTMLButtonElement;
let play= document.getElementById("play")as HTMLButtonElement;

toLoginPage.onclick = function () {
    window.location.href = "/website/pages/login.html";
};
toSignUpPage.onclick = function () {
    window.location.href ="/website/pages/signUp.html";
};
play.onclick = function () {
    window.location.href ="/website/pages/koshakSays.html";
};
