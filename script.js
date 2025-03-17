function atualizarTempo() {
    const dataInicial = new Date("2024-11-22T00:00:00");
    const agora = new Date();
    const diferenca = agora - dataInicial;

    const segundosTotais = Math.floor(diferenca / 1000);
    const dias = Math.floor(segundosTotais / 86400);
    const horas = Math.floor((segundosTotais % 86400) / 3600);
    const minutos = Math.floor((segundosTotais % 3600) / 60);
    const segundos = segundosTotais % 60;

    document.getElementById("tempo").textContent = `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;
}

function criarCoracao() {
    const coracao = document.createElement("div");
    coracao.classList.add("coracao");
    coracao.textContent = "❤️";

    // Posiciona aleatoriamente na tela
    coracao.style.left = Math.random() * 100 + "vw";
    coracao.style.animationDuration = Math.random() * 2 + 3 + "s";  // Tempo de queda aleatório

    document.getElementById("coracoes").appendChild(coracao);

    // Remove o coração depois que ele caiu
    setTimeout(() => {
        coracao.remove();
    }, 5000);  // 5 segundos para remover
}

// Cria corações caindo a cada 200ms
setInterval(criarCoracao, 200);

setInterval(atualizarTempo, 1000);
atualizarTempo();
