
let userNameInput= document.querySelector("#userNameInput")! as HTMLInputElement;
let passwordInput= document.querySelector("#passwordInput")! as HTMLInputElement;
let signupbutton = document.querySelector("#signupbutton")! as HTMLButtonElement;

signupbutton.onclick=function(){
    let username=userNameInput.value;
    let password=passwordInput.value;

if(!username||!password){
 alert("we need your user name and password");
 return;
}
let users=JSON.parse(localStorage.getItem("users")||"[]");


    window.location.href ="/website/pages/index.html";

}