function carregar() {
    document.body.classList.add('loaded');

    const preload = document.getElementById('box');
    if (preload) {
        preload.style.transition = 'opacity 1.5s ease';
        preload.style.opacity = '0';
        setTimeout(() => {
            preload.style.display = 'none';
        }, 300);
    }

    let msg = document.getElementById("msg");
    let img = document.getElementById("imagem");
    let titulo = document.querySelector("header h1");

    const data = new Date();
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

        let bgColor, imageSrc;

        if (hora >= 6 && hora < 12) {
            bgColor = "#5ca3fa";
            preloadColor = "#f6f7b2";
            imageSrc = "imagens/morning.png";
        } else if (hora >= 12 && hora < 18) {
            bgColor = "#f7a772";
            preloadColor = "#f7a772";
            imageSrc = "imagens/afternoon.png";
        } else if (hora >= 18 && hora < 24) {
            bgColor = "#485678";
            preloadColor = "#485678";
            imageSrc = "imagens/night1.png";
        } else {
            bgColor = "#2b3242";
            preloadColor = "#2b3242";
            imageSrc = "imagens/night2.png";
        }

        document.body.style.background = bgColor;
        msg.style.color = bgColor;
        img.src = imageSrc;
    }

    setInterval(horario, 1000);
    horario();

}
