let score=0;

function showModal(){
    document.getElementsByClassName("modal")[0].style.display='flex';
}

function modalclose(){
    document.getElementsByClassName("modal")[0].style.display='none';
}
function playAgain(){
    document.getElementById("dvBody").style.display='flex';
    document.getElementById("dvPlay").style.display='none';
    document.getElementById('dvLeft').innerHTML=document.getElementById('dvLeft').childNodes[0].outerHTML;
    document.getElementById('dvRight').innerHTML=document.getElementById('dvRight').childNodes[0].outerHTML;

}
function results(your,house){

    let win=false;
    switch (your){
        case 'papper':
            win=house=='scissors'?false:true;
            break;
        case 'scissors':
            win=house=='rock'?false:true;
            break;
        case 'rock':
            win=house=='papper'?false:true;
            break;
    }
    
    if (win){
        score++;
        document.getElementById('hResult').textContent='YOU WIN';
    }
    else{
        if (score>0)
            score--;
            document.getElementById('hResult').textContent='YOU LOSE';
    }
    document.getElementById('scoreNumber').textContent=score;
}

function selection(obj){
    let vector=['papper','scissors','rock'];    

    let houseVector=vector.filter(item=>{
        return item!=obj.id;
    });
    let luck=Math.round(Math.random(),0);



    let dvleft=document.getElementById('dvLeft');
    dvleft.innerHTML=dvleft.innerHTML+obj.outerHTML;
    dvleft.childNodes[1].removeAttribute('onclick');
    let dvright=document.getElementById('dvRight');
    dvright.innerHTML=dvright.innerHTML+document.getElementById(houseVector[luck]).outerHTML;
    dvright.childNodes[1].removeAttribute('onclick');

    results(obj.id,houseVector[luck]);

    document.getElementById("dvBody").style.display='none';
    document.getElementById("dvPlay").style.display='flex';
}