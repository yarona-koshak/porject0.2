let gotohome=document.getElementById("home") as HTMLButtonElement;

let usernameDiv = document.querySelector("#welcomeDiv") as HTMLDivElement;

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


gotohome.onclick=function(){
  alert("ou go to home page")
  window.location.href ="/website/pages/index.html";
}
