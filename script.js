const home = document.getElementById("home");
const letter = document.getElementById("letter");
const typedText = document.getElementById("typedText");
const nextButton = document.getElementById("nextButton");
const gallery = document.getElementById("gallery");
const galleryImage = document.getElementById("galleryImage");
const galleryCaption = document.getElementById("galleryCaption");
const nextPhoto = document.getElementById("nextPhoto");
const finalScreen = document.getElementById("final");
const hearts = document.getElementById("hearts");
const music = document.getElementById("music");
const startButton = document.getElementById("startButton");

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

const fotos = [
    {
        Imagem: "Imagens/foto1.jpeg",
        legenda: "Seu sorriso consegue fazer parecer que o mundo ficou um pouquinho melhor."
    },
    {
        Imagem: "Imagens/foto2.jpeg",
        legenda: "Você provavelmente nem imagina o quanto eu gosto dessa foto."
    },
    {
        Imagem: "Imagens/foto3.jpeg",
        legenda: "Tem dias em que tudo parece pesado... até eu olhar uma foto sua."
    },
    {
        Imagem: "Imagens/foto4.jpeg",
        legenda: "Acho que foi nessa foto que eu fiquei olhando para a tela por tempo demais."
    },
    {
        Imagem: "Imagens/foto5.jpeg",
        legenda: "E mesmo depois de todas essas... eu ainda sei que minha foto favorita será a próxima que eu tirar de você."
    }
];

let fotoAtual = 0;
let intervaloCoracoes = null;

function mostrarFoto() {
    galleryImage.src = fotos[fotoAtual].imagem;
    galleryCaption.textContent = fotos[fotoAtual].legenda;

    if (fotoAtual === fotos.length - 1) {
        nextPhoto.textContent = "Ver surpresa final ❤️";
    } else {
        nextPhoto.textContent = "Próxima ❤️";
    }
}

function escreverTexto() {
    let i = 0;
    typedText.textContent = "";

    function escrever() {
        if (i < texto.length) {
            typedText.textContent += texto.charAt(i);
            i++;
            setTimeout(escrever, 40);
        } else {
            nextButton.classList.remove("hidden");
        }
    }

    escrever();
}

function criarCoracao(emoji = "🤍") {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.textContent = emoji;
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (12 + Math.random() * 18) + "px";
    heart.style.animationDuration = (5 + Math.random() * 5) + "s";
    hearts.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);
}

function iniciarCoracoes(intervalo = 250) {
    if (intervaloCoracoes) {
        clearInterval(intervaloCoracoes);
    }

    intervaloCoracoes = setInterval(() => criarCoracao(), intervalo);
}

function mostrarFinal() {
    gallery.classList.add("hidden");
    finalScreen.classList.remove("hidden");
    iniciarCoracoes(120);

    for (let i = 0; i < 8; i++) {
        setTimeout(() => criarCoracao("❤️"), i * 200);
    }
}

iniciarCoracoes();

startButton.addEventListener("click", () => {
    music.play().catch(() => {});
    home.classList.add("hidden");
    letter.classList.remove("hidden");
    escreverTexto();
});

nextButton.addEventListener("click", () => {
    letter.classList.add("hidden");
    gallery.classList.remove("hidden");
    mostrarFoto();
});

nextPhoto.addEventListener("click", () => {
    if (fotoAtual < fotos.length - 1) {
        fotoAtual++;
        mostrarFoto();
    } else {
        mostrarFinal();
    }
});
