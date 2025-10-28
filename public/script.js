const menuToggle = document.getElementById('toggle');
const menu = document.getElementById('navbar2');

menuToggle.addEventListener('click', () => 
{
    menu.classList.toggle('active');

    const icon = menuToggle.querySelector('i');
    icon.classList.toggle('fa-bars');
     icon.classList.toggle('fa-xmark');
});

    const audio = document.getElementById("sound");
    const button = document.getElementById("icon1");
    const icon = button.querySelector('i');

button.addEventListener("click", function () {
    if (audio.paused) {
        audio.play();
        icon.classList.remove("fa-play");  
        icon.classList.add("fa-pause");   
    } 
        
    else {
        audio.pause();
        icon.classList.remove("fa-pause"); 
        icon.classList.add("fa-play");     
    }
});