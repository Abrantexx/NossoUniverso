const card = document.querySelector(".card");
const letter = document.getElementById("letter");
const typedText = document.getElementById("typedText");
const nextButton = document.getElementById("nextButton");
const texto = `Oi, meu amor.

Se você está lendo isso...

é porque resolveu abrir um presente um pouco diferente.

Você fez uma colagem para mim.

E eu pensei:

"Por que não fazer uma para você..."

Só que do meu jeito.

Então decidi transformar algumas linhas de código em uma lembrança.

Espero que você goste.

❤️`;
function escreverTexto(){

    let i = 0;

    typedText.innerHTML = "";

    function escrever(){

        if(i < texto.length){

            typedText.innerHTML += texto.charAt(i);

            i++;

            setTimeout(escrever,40);

        }else{

            nextButton.classList.remove("hidden");

        }

    }

    escrever();

}
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

    card.style.display = "none";

    letter.classList.remove("hidden");

    escreverTexto();

});
