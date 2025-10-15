'use strict'; 

const enteredAuthor = document.querySelector("#author"); 
const enteredTitle = document.querySelector("#title"); 
const enteredYear = document.querySelector("#year"); 

const template = document.querySelector("#MusicList"); 

document.getElementById("AddedMusic").addEventListener('submit', (e) => {
    e.preventDefault();
    
    const author = enteredAuthor.value;
    const title = enteredTitle.value;
    const year = parseFloat(enteredYear.value);
    
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

    enteredAuthor.value = "";
    enteredTitle.value = "";
    enteredYear.value = "";
});
