const toggleMenu = () => {
    const menu = document.getElementById('menu-opcoes');
    menu.classList.toggle('oculto');
    menu.classList.toggle('ativo');

    if (document.getElementById('overlay'))
        document.body.removeChild(overlay);
    else
        createOverlay()
}

const createOverlay = () => {
    const overlay = document.createElement('div');
    overlay.id = 'overlay';
    overlay.style.position = 'absolute';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.background = 'rgba(0, 0, 0, 0.3)';
    overlay.style.zIndex = '2';
    document.body.appendChild(overlay);
}

document.body.addEventListener('click', function (event) {
    const overlay = document.getElementById('overlay');
    if (overlay && event.target === overlay) {
        toggleMenu();
    }
});