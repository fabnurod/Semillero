/*pisition variable*/
var pos=0; 
/*list of persons*/
let Lstpersonas =[
["Tanya Sinclair","UX Engineer","I've been interested in coding for a while    but never taken the jump, until now. I couldn't recommend this course enough. I'm now in the job of my dreams and so excited about the future.","images/image-tanya.jpg"],
["John Tarkpor","Junior Front-end Developer","If you want to lay the best foundation   posible l'd recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a profesional developer.","images/image-john.jpg"],
["James Chaves","Development Assistant","If you want to lay a foundation for English learning combined with Software technology, Look no further, English4Coders is here. I'm getting better at coding and improving my English at the same time","images/image-james.jpg"]
];

let text=Lstpersonas[0][2],rol='<span id="sprol" style="color: lightslategray; margin-left: 20px">'+Lstpersonas[0][1]+'</span>',nombre='<span id="spname">'+Lstpersonas[0][0]+'</span>';



function kick_off(){
    document.getElementById("dvDescription").innerHTML=text+'</br>'+nombre+''+rol;
    document.getElementById("imgPhoto").src=Lstpersonas[0][3];
}

function next(){
    pos +=1;
    if (pos==3) 
        pos=0;
    text=Lstpersonas[pos][2],rol='<span id="sprol" style="color: lightslategray; margin-left: 20px">'+Lstpersonas[pos][1]+'</span>',nombre='<span id="spname">'+Lstpersonas[pos][0]+'</span>';
    document.getElementById("dvDescription").innerHTML=text+'</br>'+nombre+' '+rol;
    document.getElementById("imgPhoto").src=Lstpersonas[pos][3];
  
};

function prev(){
    pos -=1;
    if (pos==-1) 
        pos=2;  
    text=Lstpersonas[pos][2],rol='<span id="sprol" style="color: lightslategray; margin-left: 20px">'+Lstpersonas[pos][1]+'</span>',nombre='<span id="spname">'+Lstpersonas[pos][0]+'</span>';
    document.getElementById("dvDescription").innerHTML=text+'</br>'+nombre+' '+rol
    document.getElementById("imgPhoto").src=Lstpersonas[pos][3];
};




