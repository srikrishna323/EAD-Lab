let attempts = 0;
const maxAttempts = 3;
function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    let message = document.getElementById("message");
    let correctUser = "admin";
    let correctPass = "1234";
    if(user === correctUser && pass === correctPass){
        message.style.color = "lightgreen";
        message.innerText = "Login Successful!";
        attempts = 0; 
    } 
    else {
        attempts++;
        if(attempts >= maxAttempts){
            message.style.color = "red";
            message.innerText = "Account locked! Too many attempts.";
            document.querySelector("button").disabled = true;
        } else {
            message.style.color = "yellow";
            message.innerText = `Wrong credentials! Attempts left: ${maxAttempts - attempts}`;
        }
    }
}