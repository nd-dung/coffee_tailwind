var topMenu = document.getElementById('ct-top-menu');
var toggleTopMenuIcon = document.getElementById('ct-toggle-top-menu-icon');

document.addEventListener('click', (e) => {
    if(toggleTopMenuIcon.contains(e.target)) {
        // CLick vào nút ba gạch
        topMenu.classList.toggle('hidden');
        topMenu.classList.toggle('ct-topmenu-expanded');
    }else {
        // CLick bên ngoài nút ba gạch
        if(topMenu.classList.contains('ct-topmenu-expanded')){
            topMenu.classList.remove('ct-topmenu-expanded');
            topMenu.classList.add('hidden');
        }
    }
});