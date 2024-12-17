let toSignUpPage = document.getElementById("signUpButton") as HTMLButtonElement;
let toPlayPage = document.getElementById("gamebutton")as HTMLButtonElement;
let toLoginPage = document.getElementById("loginbutton")as HTMLButtonElement;
toPlayPage.onclick = function () {
    window.location.href = "/website/pages/koshakSays.html";
};
toLoginPage.onclick = function () {
    window.location.href = "/website/pages/login.html";
};
toSignUpPage.onclick = function () {
    window.location.href ="/website/pages/signUp.html";
};