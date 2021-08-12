const header = document.getElementById("main-header");

function scrollHeaderTop (){
    if (window.scrollY > 500){
        header.classList.add("top-header")
    }
}

document.addEventListener("scroll", scrollHeaderTop);
// document.onscroll=scrollHeaderTop
