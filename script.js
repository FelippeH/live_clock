function carregar() {

let msg = document.getElementById("msg");
let img = document.getElementById("imagem");
const data = new Date();
let titulo = document.querySelector("header h1");
const format = data.toLocaleDateString('pt', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
});
titulo.innerHTML = `${format}`;

function horario() {
const agora = new Date();
const hora = agora.getHours();
const minutos = agora.getMinutes().toString().padStart(2, '0');
const segundos = agora.getSeconds().toString().padStart(2, '0');
msg.innerHTML = `${hora}:${minutos}:${segundos}`;

    if (hora >= 6 && hora < 12) {
        img.src = "imagens/morning.png"
        document.body.style.background = "#f6f7b2";
        msg.style.color = "#f6f7b2";

    }else if (hora >= 12 && hora < 18) {
        img.src = "imagens/afternoon.png";
        document.body.style.background = "#f7a772";
        msg.style.color = "#f7a772";

    }else if (hora >= 18 && hora < 24) {
        img.src = "imagens/night1.png";
        document.body.style.background = "#485678";
        msg.style.color = "#485678";

    }else {
        img.src = "imagens/night2.png";
        document.body.style.background = "#2b3242";
        msg.style.color = "#2b3242";
    }
}

setInterval(horario, 1000);
horario();
}