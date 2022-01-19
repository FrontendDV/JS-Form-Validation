const form = document.getElementById('form')
const nameInput = document.getElementById('nameInput');
const emailInput = document.getElementById('emailInput');
const passwordInput = document.getElementById('passwordInput');
const passwordCheckInput = document.getElementById('passwordCheckInput');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    checkInputs();
})


function checkInputs(){
    // get the values from input
    let nameInputValue = nameInput.value.trim();
    let emailInputValue = emailInput.value.trim();
    let passwordInputValue = passwordInput.value.trim();
    let passwordCheckInputValue = passwordCheckInput.value.trim();
    // name input check
    if(nameInputValue === ""){
        setErrorFor(nameInput,"Name cannot be blank") ;
    }else{
        setSuccessFor(nameInput);
    }
    // email input check
    if(emailInputValue === ""){
        setErrorFor(emailInput,"Email cannot be blank");
    }else if(!isEmail(emailInputValue)){
        setErrorFor(emailInput);
    }else{
        setSuccessFor(emailInput);
    }
    // password input check
    if(passwordInputValue === ""){
        setErrorFor(passwordInput,"Password cannot be blank");
    }else{
        setSuccessFor(passwordInput);
    }
    // password must contain 8 symbols
    if(passwordInput.value.length <= 8){
        setErrorFor(passwordInput,"Password must contain 8 symbols");
    }
    // confirm password check
    if(passwordCheckInputValue === "" || passwordCheckInputValue != passwordInputValue ){
        setErrorFor(passwordCheckInput,"Password does not match");
    }else{
        setSuccessFor(passwordCheckInput);
    }
    // if registraion process finished check it and give succes card popUp
    successRegist(); 
}

// success registration function
function successRegist(){
    let nameInputValue = nameInput.value.trim();
    let emailInputValue = emailInput.value.trim();
    let passwordInputValue = passwordInput.value.trim();
    let passwordCheckInputValue = passwordCheckInput.value.trim();
    if(nameInputValue != "" && emailInputValue != "" && passwordInputValue != "" && passwordCheckInputValue != "" && passwordInputValue == passwordCheckInputValue){
        const popUp = document.querySelector('#popUp');
        popUp.className ="popUp finish";
        document.body.className ="popUpBackground";
        const signUpDiv = document.querySelector('.signUpDiv');
        signUpDiv.style.display="none";
    }
}

// error function if checking input gets error
function setErrorFor(input,message){
    const inputDiv = input.parentElement;
    const errorSpan = inputDiv.querySelector('span');
    errorSpan.innerText = message;
    inputDiv.className = 'inputDiv error';
}
// success function if checking input gets success
function setSuccessFor(input){
    const inputDiv = input.parentElement;
    inputDiv.className = 'inputDiv success'
}

// this function makes sure email input value is verify ending (.com , .ru, .edu and e.t.c)
function isEmail(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}