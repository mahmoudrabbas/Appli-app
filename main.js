
const lis = document.getElementsByClassName('link');


for(let i=0; i<lis.length; i++){
    lis[i].addEventListener('click', function() {
        for(let j=0; j<lis.length; j++){
            lis[j].classList.remove('active');
        }
        this.classList.add('active');
    })
}


icon.onclick = function(){
    links.classList.toggle("responsive");
}








const checks = document.getElementsByClassName('check');

for(let i=0; i<checks.length; i++){
    checks[i].style.display = 'none';
}


const form = document.forms[0];

form.onsubmit = (e) => {
    e.preventDefault();
    validate();
}

window.onload = function(){
    email.focus();
}



function validate() {
    let valid = 0;
    if(email.value === ''){
        checkEmail.style.display = 'block';
    }else {
        checkEmail.style.display = 'none';
        valid++;
    }

    if( password.value.length == 0 ){
        checkPassword.innerHTML = 'Enter your password';
        checkPassword.style.display = 'block';
    }else if( password.value.length < 10 ){
        checkPassword.innerHTML = 'Password is very weak';
        checkPassword.style.display = 'block';
    }else {
        checkPassword.style.display = 'none';   
        valid++;
    }

    if(valid === 2){
        toast.style.display = 'block';
        setTimeout(() => {
            toast.remove();
        }, 5000)
    }

}

closeBtn.onclick = function() {
    this.parentElement.parentElement.remove();
}
