let count = 0;
const slider = ()=>{
    setInterval(runslider,3000);
}

const runslider = ()=>{
    if(count === 0){
        let selectart = document.querySelector('#sliderarticle');
        selectart.style.marginLeft = "-600px";
        selectart.style.transition = "margin-left 1s";
        count = count +1;
    }
    else if(count === 1){
        let selectart = document.querySelector('#sliderarticle');
        selectart.style.marginLeft = "-1200px";
        selectart.style.transition = "margin-left 1s";
        count = count +1;
    }
    else if(count === 2){
        count = 0;
    }

}

