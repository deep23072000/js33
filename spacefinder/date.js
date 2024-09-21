

function spacefind(){
    let str = document.querySelector('#val').value;
    console.log(str);
    let count = 0;
    for(let i =0 ;i<str.length;i++){
        if(str[i] === " "){
            count = count + 1;
        }
    }

    console.log(count)
}
