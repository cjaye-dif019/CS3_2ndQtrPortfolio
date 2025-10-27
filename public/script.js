const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => 
{
    menu.classList.toggle('active');

    const icon = menuToggle.querySelector('i');
    icon.classList.toggle('fa-bars');
     icon.classList.toggle('fa-xmark');
});