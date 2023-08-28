let gamesequence=[];
let usersequence=[];
let h2=document.querySelector("h2")
 
let colorbtn=["red","yellow","green","purple"]

let started=false;
let level=0;

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started ");
        started=true;

        levelup()
    }
})
function gameflashup(btn){
    btn.classList.add("gameflash");
    setTimeout(function(){
        btn.classList.remove("gameflash")
    },250);

}
function userflashup(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash")
    },250);
}
function levelup(){
    usersequence=[];
    level++;
    h2.innerText=`Level ${level}`

    let randomidx=Math.floor(Math.random()*3);
    let randomcolor=colorbtn[randomidx];
    let randombutton=document.querySelector(`.${randomcolor}`);
    gamesequence.push(randomcolor)
    console.log(gamesequence)
    gameflashup(randombutton);

}
function checkans(idx){
    
    
    if(usersequence[idx] === gamesequence[idx]){
        if(usersequence.length == gamesequence.length){
            setTimeout(levelup,1000)
        }
    }
    else{
        h2.innerHTML=`Game over!<b>your score was ${level} </b> <br> press key again to start`
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white"
        },500)
        reset()
    }
}

function btnpress(){
    let btn=this;
    userflashup(btn);
    let usercolor=this.getAttribute("id");
    console.log(usercolor)
    usersequence.push(usercolor);
   

    checkans(usersequence.length-1)
}

let allbtn=document.querySelectorAll(".btn");
for(btn of allbtn){
    btn.addEventListener("click",btnpress)
}
function reset() {
    gamesequence=[];
    usersequence=[];
    started=false;
    level=0;
}