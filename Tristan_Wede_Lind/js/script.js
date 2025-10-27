'use strict';

// Scroll to the top arrow 
const arrowBtns = document.querySelectorAll(".arrow");

arrowBtns.forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
});

// Scroll down menu (remove hidden class from style.css)
// document.querySelectorAll('nav > ul > li > a').forEach(menuOption => {
//     menuOption.addEventListener('click', function() {
        
//         document.querySelectorAll(`nav > ul > li > a`).forEach(option => {
//             option.classList.remove('active');
//         });
//         this.classList.add('active');
        
//        const dataTarget = this.getAttribute('data-target');
//         const targetElement = document.getElementById(dataTarget);
//         if(targetElement) {
//             targetElement.scrollIntoView({ behavior: 'smooth' });
//         }
//     });
// });


// Only displaying the clicked menu 
document.querySelectorAll('nav > ul > li > a').forEach(menuOption => {
  menuOption.addEventListener('click', function() {

    document.querySelectorAll('nav > ul > li > a').forEach(option => {
      option.classList.remove('active'); 
    }); 
    this.classList.add('active');

    const dataTarget = this.getAttribute('data-target'); 
    document.querySelector(`#${dataTarget}`).classList.remove('hidden'); 
    document.querySelectorAll(`.page:not(#${dataTarget})`).forEach(page => {
      page.classList.add('hidden'); 
    }); 
  }); 
});
 