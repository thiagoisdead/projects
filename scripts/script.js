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

function addScrollEventListener() {
    window.addEventListener('scroll', function () {
        let scroll = document.querySelector('.scrollTop');
        scroll.classList.toggle('active', window.scrollY > 150); // Valor indica quando vai aparecer a seta pra voltar ao inicio
    });
}

var copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector(".logos").appendChild(copy);

function enableSmoothScroll(scrollAmount) {
    window.addEventListener('wheel', (event) => {
        event.preventDefault();

        const currentScrollY = window.scrollY;
        let newScrollY;

        if (event.deltaY > 0) {
            // Scroll para baixo
            newScrollY = currentScrollY + scrollAmount;
        } else {
            // Scroll para cima
            newScrollY = currentScrollY - scrollAmount;
        }

        // Faz o scroll suave
        window.scrollTo({
            top: newScrollY,
            behavior: 'smooth'
        });
    }, { passive: false });
}

// Lugar pra chamar funções
enableSmoothScroll(1100); // O quanto desce o scroll do mouse
addScrollEventListener(); // Ativa a seta pra cima
