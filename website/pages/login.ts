import { send } from "../utilities";

let username = document.querySelector("#userNameInput")! as HTMLInputElement;
let password = document.querySelector("#passwordInput")! as HTMLInputElement;
let buttonLogin = document.querySelector("#buttonLogin")! as HTMLButtonElement;
let text=document.getElementById("texttouser")! as HTMLDivElement;
buttonLogin.onclick = async function () {
    let[userFound,userId]= await send("login", [username.value, password.value])as [boolean,string];
    console.log("user found:" + userFound);
if(userFound){
    localStorage.setItem("userId",userId);
}

};