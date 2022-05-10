let msgempty='cannot be empty ';
let msgerror='Looks like this is not an ';

function send(){
    let smalls=document.querySelectorAll('small');
    smalls.forEach(item => {item.innerHTML='';}); 
    let errors=document.querySelectorAll(".error");
    errors.forEach(item => {item.style.display='none';}); 

    let First=document.getElementById("First");
    if (First.value==''){
        validatEmpty(First);
    }
    else{
        if (validateFirstCap(First)){}
    }

    let Last=document.getElementById("Last");
    if (Last.value==''){
        validatEmpty(Last);
    }
    else{
        if (validateFirstCap(Last)) {}
    }

    let email=document.getElementById("email");
    if (email.value==''){
        validatEmpty(email);
    }
    else{
        if (!validatEmail(email)) {}
    }

    let pass=document.getElementById("Password");
    if (pass.value==''){
         validatEmpty(pass);
    }
    else{
         if (validatePass(pass)) {} ;
    }

}

function validatEmail(obj) {
    let res=((/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i).test(obj.value));
    if(!res){
        document.getElementById('s'+obj.id).innerHTML=msgerror+obj.id+' '+obj.className;
        document.getElementById('s'+obj.id).style.display='block';
        document.querySelector('#'+obj.id+' + .error').style.display='block';
    }
    return(res);
}

function validatePass(obj) {
    let text=obj.value;
    let res=((/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,16}$/i).test(text));
    if(!res){
        document.getElementById('s'+obj.id).innerHTML=msgerror+obj.id+' '+obj.className
        document.getElementById('s'+obj.id).style.display='block';
        document.querySelector('#'+obj.id+' + .error').style.display='block';
    }
    return(res);
}

function validateFirstCap(obj) {
    let text=obj.value;
    let res=((/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/i).test(text));
    if(!res){
        document.getElementById('s'+obj.id).innerHTML=msgerror+obj.id+' '+obj.className
        document.getElementById('s'+obj.id).style.display='block';
        document.querySelector('#'+obj.id+' + .error').style.display='block';
    }
    return(res);
}

function validatEmpty(obj){
    document.getElementById('s'+obj.id).innerHTML=obj.id+' '+obj.className+' '+msgempty;
    document.getElementById('s'+obj.id).style.display='block';
    document.querySelector('#'+obj.id+' + .error').style.display='block';
}

/*
/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,16}$/gm
*/

