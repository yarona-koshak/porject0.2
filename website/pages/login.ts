import { send } from "../utilities";

let userNameInput = document.querySelector("#usernameInput")! as HTMLInputElement;
let passwordInput = document.querySelector("#passwordInput")! as HTMLInputElement;
let buttonLogin = document.querySelector("#buttonLogin")! as HTMLButtonElement;
let text = document.getElementById("texttouser")! as HTMLDivElement;
buttonLogin.onclick = async function () { 
    let userId = await send("login", [userNameInput.value, passwordInput.value]) as string | null;
    if (userId != null) {
        localStorage.setItem("userId", userId);
        window.location.href = "/website/pages/index.html";
    }
 
};


    