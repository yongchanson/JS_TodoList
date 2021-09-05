const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const logind = document.querySelector("#login");
const named = document.querySelector("#name");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
    
}

function paintGreetings(username) { //로그인후 list=하나 / name=전체
    greeting.innerText = `Hello! ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) { //로그인전
    loginForm.classList.remove(HIDDEN_CLASSNAME); 
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}

