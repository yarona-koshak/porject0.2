import { send } from "../utilities";

let userNameInput = document.querySelector("#userNameInput")! as HTMLInputElement;
let passwordInput = document.querySelector("#passwordInput")! as HTMLInputElement;
let signupbutton = document.querySelector("#signupbutton")! as HTMLButtonElement;
let button = document.querySelector("#button")! as HTMLButtonElement;
signupbutton.onclick = async function () {
    let userId = await send("signUp", [userNameInput.value, passwordInput.value]) as string;
    console.log(userId);
    alert("hello hello");
    window.location.href = "/website/pages/index.html";
}