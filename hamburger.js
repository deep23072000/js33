function shownav(){
    let selectnav = document.querySelector('#nav');
    selectnav.style.marginLeft = "0px";
    selectnav.style.transition = "margin-left 2s";

    let selectbar = document.querySelector('#bar');
    selectbar.style.display = "none";
    let selectcross = document.querySelector('#cross');
    selectcross.style.display = "block";
}

function hidenav(){
    let selectnav = document.querySelector('#nav');
    selectnav.style.marginLeft = "-500px";
    selectnav.style.transition = "margin-left 2s";

    let selectbar = document.querySelector('#bar');
    selectbar.style.display = "block";
    let selectcross = document.querySelector('#cross');
    selectcross.style.display = "none";
}

