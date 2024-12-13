import { send } from "../utilities";

let userNameInput= document.querySelector("#userNameInput")! as HTMLInputElement;
let passwordInput= document.querySelector("#passwordInput")! as HTMLInputElement;
let buttonSignUp = document.querySelector("#buttonSignUp")! as HTMLButtonElement;

buttonSignUp.onclick=function(){
    send("signUp", [userNameInput.value, passwordInput.value]);
}