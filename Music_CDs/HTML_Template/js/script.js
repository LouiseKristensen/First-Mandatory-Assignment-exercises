'use strict'; 



document.getElementById("AddedMusic").addEventListener('submit', (e) => {
    e.preventDefault();
    
    const author = e.target.author.value;
    const title = e.target.title.value;
    const year = parseFloat(e.target.year.value);

    const template = document.querySelector("#MusicList"); 
    const rows = template.content.cloneNode(true);
    
    rows.querySelector(".author").textContent = author; 
    rows.querySelector(".title").textContent = title; 
    rows.querySelector(".year").textContent = year; 
    
    const removebtn = rows.querySelector(".removebtn"); 
    removebtn.addEventListener('click', function(){
        this.closest("tr").remove();
    });

    const table = document.querySelector("table"); 
    table.append(rows);

    e.target.reset(); 
});
