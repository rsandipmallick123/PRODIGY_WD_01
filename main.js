let serach=document.querySelector('.search-box');

document.querySelector('#search-icon').onclick=()=>{
    serach.classList.toggle('active');
};

window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});


const menuItems = document.querySelectorAll('.navbar a');
menuItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.color = '#ff0000'; 
    });
    item.addEventListener('mouseout', () => {
        item.style.color = ''; 
    });
});
