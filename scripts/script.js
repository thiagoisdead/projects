function exibirMensagem() {
    document.getElementById('mensagem').style.display = 'block';
}
function voltarAoTopo() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}
const chk = document.getElementById('themeChk')

chk.addEventListener('change', () => {
  document.body.classList.toggle('light')
})