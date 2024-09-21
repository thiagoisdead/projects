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