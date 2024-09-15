var timer = 60;
var score = 0;
var hintvar = 0;
function scoreRun(){
  score+=10;
  document.querySelector("#scoreCount").innerHTML = score;
}

function getHin(){
   hintvar = Math.floor(Math.random()*10)
  document.querySelector("#hint").textContent = hintvar;
}

function makeBubble(){

  var clutter = "";
  for(var i=1;i<=90;i++){
      var rn = Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${rn}</div>`;
  }
  document.querySelector("#pbtm").innerHTML = clutter;
}

function reunTimer(){
  var timeint = setInterval(()=>{ // setInterval repeat hota hai specific time ke bad
     if(timer>=0){
       document.querySelector("#timer").innerHTML = timer;
       timer--;
     }
     else{
       console.log("close")
       clearInterval(timeint)
       document.querySelector("#pbtm").innerHTML = `<div id="scoreEarn">your Score is ${score}</div> `;
     }
  },1000)                
}

function scourMatch(){
  document.querySelector("#pbtm").
  addEventListener("click",(e)=>{
    var bubblN = Number(e.target.textContent)
    if(bubblN === hintvar){
      scoreRun(); 
      getHin();
      makeBubble();
    }
  })
       
}

getHin();
reunTimer();
makeBubble();
scourMatch();



// setTimeout(() =>{}, 1000); settimeout ak bar chalt hai specific time ke bad