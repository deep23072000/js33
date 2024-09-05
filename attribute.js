function changeimg(a){
    console.log(a)
    let selectimg = document.querySelector('.largeimg');
    if(a == 1){
        selectimg.src = "https://m.media-amazon.com/images/I/61mOVGinDdL._SX679_.jpg";
    }

    else if(a == 2){
        selectimg.src = "https://m.media-amazon.com/images/I/81s6kDRXccL._SX679_.jpg"
    }
    else if(a == 3){
        selectimg.src = "https://m.media-amazon.com/images/I/81O4CDp00dL._SX679_.jpg"
    }
}