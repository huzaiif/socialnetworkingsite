var settingsmenu = document.querySelector(".settings-menu");
var darkbtn = document.getElementById("darkbtn")

function settingsMenuToggle(){
    settingsmenu.classList.toggle("settings-menu-height")
}
darkbtn.onclick = function(){
    darkbtn.classList.toggle("darkbtn-on");
    document.body.classList.toggle("dark-theme")
    if(localStorage.getItem("theme") =="light"){
    localStorage.setItem("theme", "dark")
    }
    else{
        localStorage.setItem("theme", "light")
    }
}
if (localStorage.getItem("theme") == "light"){
    darkbtn.classList.remove("darkbtn-on")
    document.body.classList.remove("dark-theme")
} 
else if(localStorage.getItem("theme") == "dark"){
    darkbtn.classList.add("darkbtn-on")
    document.body.classList.add("dark-theme")
}
else{
    localStorage.setItem("theme", "light")
}


