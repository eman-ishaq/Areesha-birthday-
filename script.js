const sections = ["hero","intro","pretty","poetry","messages","wish","gift","password","final"];

function go(id){
  if(id==="hero"){
    window.scrollTo({top:0,behavior:"smooth"});
    return;
  }
  const el=document.getElementById(id);
  if(el) el.scrollIntoView({behavior:"smooth",block:"start"});
}

window.addEventListener("load",()=>{
  setTimeout(()=>{
    document.getElementById("loader").classList.add("hidden");
    document.getElementById("site").classList.remove("hidden");
  },3400);
});

function openGift(){
  const msg=document.getElementById("gift-message");
  msg.classList.add("show");
  document.getElementById("gift-hint").textContent="you found it ♡";
  document.querySelector(".gift-box").style.transform="translateY(-8px) rotate(-2deg)";
}

function unlock(){
  const input=document.getElementById("password");
  const err=document.getElementById("error");
  if(input.value.trim().toUpperCase()==="EASTER"){
    err.textContent="";
    go("final");
    makeConfetti();
  }else{
    err.textContent="hmm… try the little hint again ♡";
    input.animate([{transform:"translateX(-5px)"},{transform:"translateX(5px)"},{transform:"translateX(0)"}],{duration:260});
  }
}
document.getElementById("password").addEventListener("keydown",e=>{if(e.key==="Enter")unlock()});

function makeConfetti(){
  const wrap=document.getElementById("confetti");
  wrap.innerHTML="";
  for(let i=0;i<55;i++){
    const p=document.createElement("i");
    p.style.left=(Math.random()*100)+"%";
    p.style.animationDuration=(3+Math.random()*4)+"s";
    p.style.animationDelay=(Math.random()*1.5)+"s";
    p.style.transform=`rotate(${Math.random()*360}deg)`;
    p.style.opacity=.35+Math.random()*.6;
    wrap.appendChild(p);
  }
}
