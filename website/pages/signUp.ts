import { send } from "../utilities";

let userNameInput = document.querySelector("#userNameInput")! as HTMLInputElement;
let passwordInput = document.querySelector("#passwordInput")! as HTMLInputElement;
let signupbutton = document.querySelector("#signupbutton")! as HTMLButtonElement;
let passwordcheck = document.querySelector("#passwordcheck")! as HTMLInputElement;
signupbutton.onclick = async function () {
    let userId = await send("signUp", [userNameInput.value, passwordInput.value]) as string;
    console.log(userId);
  if (passwordInput.value==passwordcheck.value){
    alert("Now You Can Play Koshak Says");
    window.location.href = "/website/pages/login.html";
}
else{
    alert("Passwords Do Not Match"); 
}
}