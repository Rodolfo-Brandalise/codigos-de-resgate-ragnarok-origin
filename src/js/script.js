function copyToClipboard(texto) {
    navigator.clipboard.writeText(texto);

    const clickedButton = document.querySelector('.botao:focus');
    if (clickedButton) {
    clickedButton.classList.add('botao-clicado');
    }
}

