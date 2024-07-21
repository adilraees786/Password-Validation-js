var passinput=document.getElementById('passinput');

var twelvechar =document.getElementById('twelvechar');

var lowercase=document.getElementById('lowercase');

var uppercase=document.getElementById('uppercase');

var numbers=document.getElementById('numbers');

var specialchar =document.getElementById('specialchar');

passinput.onkeyup =() =>{
var userpassword= passinput.value;
 

 //check lowecase letters
 var lowercaseletters = /[a-z]/g;
 if(userpassword.match(lowercaseletters)){
     lowercase.classList.add('valid');
     lowercase.classList.remove('invalid');
 }else{
     lowercase.classList.remove('valid');
     lowercase.classList.add('invalid');
 
 }


//check uppercase letter
 var pattern = /[A-Z]/g;
 if(userpassword.match(pattern)){
    uppercase.classList.add('valid');
    uppercase.classList.remove('invalid');
 }else{
    uppercase.classList.remove('valid');
    uppercase.classList.add('invalid');
 
 
}

//check Numbers
var pattern = /[0-9]/g;
if(userpassword.match(pattern)){
    numbers.classList.add('valid');
    numbers.classList.remove('invalid');
}else{
    numbers.classList.remove('valid');
    numbers.classList.add('invalid');

}

//check the length of password


if(userpassword.length  > 12){
    twelvechar.classList.add('valid');
    twelvechar.classList.remove('invalid');
}else{
    twelvechar.classList.remove('valid');
    twelvechar.classList.add('invalid');


}
//check the Special Characters

 var pattern = /[!@#$%^&*()\-+={}[\]:;"'<>,.?\/|\\]/
if(userpassword.match(pattern)){
    specialchar.classList.add('valid');
    specialchar.classList.remove('invalid');
}else{
    specialchar.classList.remove('valid');
    specialchar.classList.add('invalid');


}

}