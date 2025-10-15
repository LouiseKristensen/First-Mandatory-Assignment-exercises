'use strict';

const arrowBtns = document.querySelectorAll(".arrow");

arrowBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
});


document.querySelectorAll('nav > ul > li > a').forEach(menuOption => {
    menuOption.addEventListener('click', function() {
        
        // Only the clicked menu option is displayed as selected.
        document.querySelectorAll(`nav > ul > li > a`).forEach(option => {
            option.classList.remove('active');
        });
        this.classList.add('active');
        
       const dataTarget = this.getAttribute('data-target');
        const targetElement = document.getElementById(dataTarget);
        if(targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});