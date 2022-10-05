
const usernameInput = document.querySelector('.username-input')
const emailInput = document.querySelector('.email-input')
const passwordInput = document.querySelector('.password-input')
const confirmPasswordInput  = document.querySelector('.confirm-password-input')
const rulesCheckBox = document.querySelector('.rule-confirmation')
const ageCheckBox  = document.querySelector('.age-confirmation')
const errorUsername = document.querySelector('.error-username')
const errorEmail = document.querySelector('.error-email')
const errorPassword = document.querySelector('.error-password')
const errorPasswordConfirm = document.querySelector('.error-confirm')
const errorAge = document.querySelector('.error-age')
const errorRules = document.querySelector('.error-rules')


// console.log(errorUsername.innerHTML)


usernameInput.addEventListener('input', (e)=>{
    const value = e.target.value

    const validCharacters=  /^[a-zA-Z0-9]+$/;
console.log(value.length > 3)

    if(!value.match(validCharacters) || !(value.length > 3)    ) 
    { 
           errorUsername.classList.remove('hidden')
    } else  { 
        errorUsername.classList.add('hidden')
 }

    console.log(value.match(validCharacters))
    
console.log(e.target.value)
})

emailInput.addEventListener('input', (e)=>{
    const value = e.target.value

    const validCharacters= /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    ;


    if(!value.match(validCharacters)) 
    { 
           errorEmail.classList.remove('hidden')
    } else  { 
        errorEmail.classList.add('hidden')
 }

    console.log(value.match(validCharacters))
    
console.log(e.target.value)
})


let password;

passwordInput.addEventListener('input', (e)=>{
    const value = e.target.value
    password = e.target.value

    const validCharacters= /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,64}$/
    ;


    if(!value.match(validCharacters) || !(value.length >= 8)) 
    { 
           errorPassword.classList.remove('hidden')
    } else  { 
        errorPassword.classList.add('hidden')
 }

    console.log(value.match(validCharacters))
    
console.log(e.target.value)
})

confirmPasswordInput.addEventListener('input', (e)=>{
    const value = e.target.value

    const validCharacters= /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,64}$/;


    if(!value.match(validCharacters) || !(value.length >= 8) || !(value === password) ) 
    { 
           errorPasswordConfirm.classList.remove('hidden')
    } else  { 
        errorPasswordConfirm.classList.add('hidden')
 }

    console.log(value.match(validCharacters))
    
console.log(e.target.value)
})

rulesCheckBox.addEventListener('change', (e)=> {
    
   if(rulesCheckBox.checked) errorRules.classList.add('hidden')
   else errorRules.classList.remove('hidden')
})

ageCheckBox.addEventListener('change', (e)=> {
    
    if(ageCheckBox.checked) errorAge.classList.add('hidden')
    else errorAge.classList.remove('hidden')
 })
 




// function validation() 
// { 
//         var userid=  /^[a-zA-Z][a-zA-Z0-9]{3,20}/;

//         if(!document.userid.match(userid)) 
//         { 
//                 alert('Please enter again')
//                 return false;
//         }
        
//         var pass=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
        
//         if(!document.password.value.match(pass)) 
//         { 
//                 alert('Please enter again')
//                 return false;
//         }
//         if(document.confirmpassword.value != document.myForm.password.value) 
//         { 
//                 alert('password do not matche')
//                 return false;
//         }
//         var emailID = document.email.value;

//     atpos = emailID.indexOf("@");
//     dotpos = emailID.lastIndexOf(".");
         
//     if (atpos < 1 || ( dotpos - atpos < 2 )) {
//             alert("Please enter again");
//             return false;
//     }
        
// } 

