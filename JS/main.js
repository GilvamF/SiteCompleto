function mostrarCores() {
    var opcoesCores = document.getElementById('opcoesCores');
    opcoesCores.style.display = (opcoesCores.style.display === 'none' || opcoesCores.style.display === '') ? 'block' : 'none';
}
function escolherCor(cor) {
    var corButton = document.getElementById('corButton');
    corButton.textContent = 'Cor escolhida: ' + cor;

    var opcoesCores = document.getElementById('opcoesCores');
    opcoesCores.style.display = 'none';
}

var indiceAtual = 0;

function trocarImagem(direcao) {
    var imagens = document.querySelectorAll('#imagemContainer > div');
    indiceAtual += direcao;

    if (indiceAtual < 0) {
        indiceAtual = imagens.length - 1;
    } else if (indiceAtual >= imagens.length) {
        indiceAtual = 0;
    }

    for (var i = 0; i < imagens.length; i++) {
        imagens[i].style.display = i === indiceAtual ? 'block' : 'none';
    }
}
