let gameseq = [];
let userseq = [];
let btns = ["yellow" ,"red", "green", "purple"];


let started = false;
let Level = 0;

let h2 = document.querySelector("h2")

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("game start now!")
        started = true;
    }
    levelup();
})
function gameflash(btn){
  btn.classList.add("flash");
  setTimeout(function(){
    btn.classList.remove("flash")
  },200)
}
function userFlash(btn){
  btn.classList.add("userflash");
  setTimeout(function(){
    btn.classList.remove("userflash")
  },200)
}
function levelup (){
  userseq = [];
    Level++;
    
    
    h2.innerText = `Level ${Level}`
    let randindx = Math.floor(Math.random()*3)
    let rendcolor = btns[randindx];
    let randbtn = document.querySelector(`.${rendcolor}`)
    // console.log(randindx)
    // console.log(randbtn)
    // console.log(rendcolor)
    gameseq.push(rendcolor);
    console.log(gameseq)
    gameflash(randbtn);
}

function matchseq(idx){
  // console.log("current level is", Level)
  
  if(userseq[idx] === gameseq[idx]){
    if(userseq.length == gameseq.length){
      setTimeout(levelup, 1000)

    }
  }else{
    h2.innerHTML= `game over ! your score was <b> ${Level} </b>  <br>Press any key to start`
    document.querySelector("body").style.backgroundColor = "red"
    setTimeout(function(){
      document.querySelector("body").style.backgroundColor = "white"
    },150)
    reset();
  }
}
function btnPress(){
  console.log(this)
  let btn = this;
  usercolor = btn.getAttribute("id")
  userseq.push(usercolor)
  userFlash(btn);
  matchseq(userseq.length -1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
  btn.addEventListener("click", btnPress);
}
function reset (){
  started = false;
  userseq = [];
  gameseq = [];
  Level = 0;
}
