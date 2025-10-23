'use strict';

const enteredAuthor = document.querySelector("#author"); 
const enteredTitle = document.querySelector("#title"); 
const enteredYear = document.querySelector("#year"); 

document.getElementById("AddedMusic").addEventListener('submit', (e) => {
    e.preventDefault();

    const author = enteredAuthor.value;
    const title = enteredTitle.value;
    const year = parseFloat(enteredYear.value);
    const id = Date.now()
    const musicItem = {id, author, title, year}; 

    const row = document.createElement("tr"); 
    row.dataset.id = id;

    const data1 = document.createElement("td"); 
    data1.innerText = author; 

    const data2 = document.createElement("td"); 
    data2.innerText = title; 

    const data3 = document.createElement("td"); 
    data3.innerText = year; 

    const removebtn = document.createElement("button"); 
    removebtn.innerText = "x"; 
    removebtn.addEventListener('click', function(){
        const row = this.closest("tr"); 
        const idToRemove = parseInt(row.dataset.id);
        row.remove()

        // local storage remove tr 
        let MusicList = JSON.parse(localStorage.getItem("MusicList")) || [];
        MusicList = MusicList.filter(item => item.id !== idToRemove);
        localStorage.setItem("MusicList", JSON.stringify(MusicList));
    });

    row.append(data1, data2, data3, removebtn); 

    document.querySelector("#MusicList").append(row);

    // session storage
    // let MusicList = JSON.parse(sessionStorage.getItem("MusicList")) || [];
    // MusicList.push(musicItem);
    // sessionStorage.setItem("MusicList", JSON.stringify(MusicList));


    // Local storage 
    let MusicList = JSON.parse(localStorage.getItem("MusicList")) || []; 
    MusicList.push(musicItem); 
    localStorage.setItem("MusicList", JSON.stringify(MusicList)) 

    enteredAuthor.value = "";
    enteredTitle.value = "";
    enteredYear.value = "";
 
}); 
