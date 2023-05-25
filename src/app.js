var icon = document.getElementById('icono-menu')
var menu = document.getElementById('menu-lateral')

icon.addEventListener('click', function() {
    menu.classList.toggle('open')
})