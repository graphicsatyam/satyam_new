const bar = document.getElementById('bar');
const nav = document.getElementsById('navbar');

// for Check navbar is showing or not
if (bar) {
    bar.addEventListener('click', ()=> {
        navbar.classList.add('active'); 
    })
}