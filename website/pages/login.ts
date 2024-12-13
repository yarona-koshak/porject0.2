import { send } from "../utilities";

let userNameInput = document.querySelector("#userNameInput")! as HTMLInputElement;
let passwordInput = document.querySelector("#passwordInput")! as HTMLInputElement;
let buttonLogin = document.querySelector("#buttonLogin")! as HTMLButtonElement;
buttonLogin.onclick = async function () {
    let[userFound,userId]= await send("login", [userNameInput.value, passwordInput.value])as [boolean,string];
    console.log("user found:" + userFound);
if(userFound){
    localStorage.setItem("userId",userId);
}
};