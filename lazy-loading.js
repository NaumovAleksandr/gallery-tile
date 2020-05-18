function mueve() {
    const cadaNoscript = document.querySelectorAll("figure noscript");
    const altoViewPort = window.innerHeight;
    const desplazado = self.pageYOffset || document.documentElement.scrollTop;
    const posicionCambio = desplazado + altoViewPort - 100;

    for (counter = 0; counter < cadaNoscript.length; counter++) {
        if (cadaNoscript[counter].parentElement.offsetTop < posicionCambio) {
            let codigo = cadaNoscript[counter].innerHTML;

            codigo = codigo.replace(/&lt;/gi, "<").replace(/&gt;/gi, ">");

            cadaNoscript[counter].outerHTML = codigo;
        }
    }
}

onscroll = mueve;