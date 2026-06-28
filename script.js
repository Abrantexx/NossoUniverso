const hearts = document.getElementById("hearts");
const music = document.getElementById("music");
const startButton = document.getElementById("startButton");

function criarCoracao(){

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.textContent = "🤍";

    heart.style.left = Math.random()*100 + "vw";

    heart.style.fontSize = (12 + Math.random()*18) + "px";

    heart.style.animationDuration = (5 + Math.random()*5) + "s";

    hearts.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },10000);

}

setInterval(criarCoracao,250);

startButton.addEventListener("click",()=>{

    music.play().catch(()=>{});

    alert("A carta será aberta na V2 ❤️");

});