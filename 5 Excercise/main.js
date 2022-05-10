
function enviarEmail(){
    document.getElementById('imgError').style.display='none';
    document.getElementsByTagName('small')[0].style.display='none';

    if (!validarEmail()) {
		document.getElementById('imgError').style.display='block';
        document.getElementsByTagName('small')[0].style.display='block';
	} else {		
        document.getElementsByTagName('small')[0].innerHTML='Email correcto';
        document.getElementsByTagName('small')[0].style.display='block';
		}
}

function validarEmail() {
    let email=document.getElementById('inEmail').value;
    let res=((/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i).test(email));
    return(res);
}












/*
    https://platzi.com/tutoriales/1301-expresiones-regulares/12004-expresiones-regulares-con-javascript-i-como-usar-regex-en-js/?utm_source=google&utm_medium=cpc&utm_campaign=12915366154&utm_adgroup=&utm_content=&gclid=CjwKCAjwu_mSBhAYEiwA5BBmf_0jx4XkJ9RP3HnSj4w0S1oAtq9BtXTiZCMN9WZxfPnPCNidm8Y4ABoCI9sQAvD_BwE&gclsrc=aw.ds
    https://regex101.com/

  }*/

