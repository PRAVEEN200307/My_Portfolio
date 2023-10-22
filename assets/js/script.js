document.addEventListener('DOMContentLoaded',()=>{
    const sideNav=document.querySelector('.side-nav');
    const btnNav=document.querySelector('#btnNav');
    const OverlayScreen=document.querySelector('.navoverlay');

    btnNav.addEventListener('click',()=>{
        sideNav.classList.add('opens');
    });

    OverlayScreen.addEventListener('click',()=>{
        sideNav.classList.remove('opens');
    });

    
   
});