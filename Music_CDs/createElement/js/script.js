'use strict';

const enteredAuthor = document.querySelector("#author"); 
const enteredTitle = document.querySelector("#title"); 
const enteredYear = document.querySelector("#year"); 

document.getElementById("AddedMusic").addEventListener('submit', (e) => {
    e.preventDefault();

    const author = enteredAuthor.value;
    const title = enteredTitle.value;
    const year = parseFloat(enteredYear.value);

    const row = document.createElement("tr"); 

    const data1 = document.createElement("td"); 
    data1.innerText = author; 

    const data2 = document.createElement("td"); 
    data2.innerText = title; 

    const data3 = document.createElement("td"); 
    data3.innerText = year; 

    const removebtn = document.createElement("button"); 
    removebtn.innerText = "x"; 
    removebtn.addEventListener('click', function(){
        this.closest("tr").remove();
    });

    row.append(data1, data2, data3, removebtn); 

    document.querySelector("#MusicList").append(row);

    enteredAuthor.value = "";
    enteredTitle.value = "";
    enteredYear.value = "";


    // session storage 
    let MusicList = JSON.parse(sessionStorage.getItem("row")) || []; 
    MusicList.push({author, title, year});
    sessionStorage.setItem("row", JSON.stringify(MusicList)); 
    sessionStorage.removeItem(removebtn)

}); 



