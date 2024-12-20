import { send } from "../utilities";

let userNameInput = document.querySelector("#userNameInput")! as HTMLInputElement;
let passwordInput = document.querySelector("#passwordInput")! as HTMLInputElement;
let signupbutton = document.querySelector("#signupbutton")! as HTMLButtonElement;
let button = document.querySelector("#button")! as HTMLButtonElement;
signupbutton.onclick = async function () {
    let createdUser = await send("signUp", [userNameInput.value, passwordInput.value]) as boolean;
    if(createdUser==false){
        alert("you cant have the same user name as someone else please cheing it");
    }

}
button.onclick = function () {
    window.location.href = "/website/pages/index.html";
}