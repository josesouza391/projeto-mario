const botao = document.querySelector(".botaoentreemcontato")
const form = document.querySelector(".formulario");
const mascara = document.querySelector(".mascara-formulario")
botao.addEventListener("click", mostrarform)

function mostrarform() {
    form.style.left = "50%"
    form.style.transform = "translatex(-50%)"
    mascara.style.visibility = "visible"
}

function esconderform() {
     form.style.left = "-300px"
    form.style.transform = "translatex( 0)"
    mascara.style.visibility = "hidden"
}
