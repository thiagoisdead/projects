function exibirMensagem() {
    document.getElementById('mensagem').style.display = 'block';
}

function voltarAoTopo() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

const chk = document.getElementById('themeChk');

chk.addEventListener('change', () => {
    document.body.classList.toggle('light');
});

document.addEventListener('DOMContentLoaded', () => {
    SVGInjector(document.querySelectorAll('.svgInject'));
});

window.addEventListener('scroll', function() {
    let scroll = document.querySelector('.scrollTop');
    scroll.classList.toggle('active', window.scrollY > 150);
});
var copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector(".logos").appendChild(copy);

function enableScrollLock(scrollDelay = 2000) {
    let canScroll = true; // Controla se a rolagem está permitida ou não
    let scrollTimer;      // Armazena o temporizador
    let scrollPosition = window.scrollY; // Posição atual da rolagem

    // Função para permitir rolagem após o tempo definido
    function allowScroll() {
        canScroll = true; // Permite rolagem
    }

    // Função que impede rolagem
    function disableScroll() {
        canScroll = false; // Bloqueia rolagem
        scrollTimer = setTimeout(allowScroll, scrollDelay); // Habilita rolagem novamente após o delay
    }

    // Evento de rolagem
    window.addEventListener('scroll', function(e) {
        if (!canScroll) {
            e.preventDefault(); // Impede a rolagem
            window.scrollTo(0, scrollPosition); // Mantém a posição da página
        } else {
            scrollPosition = window.scrollY; // Atualiza a posição da rolagem
            disableScroll(); // Bloqueia rolagem por um tempo
        }
    }, { passive: false });
}