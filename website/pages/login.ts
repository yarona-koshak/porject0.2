import { send } from "../utilities";

let userNameInput = document.querySelector("#usernameInput")! as HTMLInputElement;
let passwordInput = document.querySelector("#passwordInput")! as HTMLInputElement;
let buttonLogin = document.querySelector("#buttonLogin")! as HTMLButtonElement;
let text = document.getElementById("texttouser")! as HTMLDivElement;
buttonLogin.onclick =  function () { 
    let username=userNameInput.value;
    
   window.location.href = "/website/pages/index.html";
};

 // let [userFound, userId] = await send("login", [username.value, password.value]) as [boolean, string];
    // console.log("user found:" + userFound);
    // if (userFound) {
    //     localStorage.setItem("userId", userId);
    // }
    