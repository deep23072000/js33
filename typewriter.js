let str = "we are developers";
let count = 0;
let sstr = "";
const tpw = ()=>{
    setInterval(run,100);
}

const run = ()=>{
      let s = document.querySelector('#output');
      sstr = sstr + str[count];//We + a;
      s.innerHTML = sstr;
      count = count + 1;//3
      if(count> str.length-1){
        count = 0;
        sstr = ""
      }
}

let s = new Date();


console.log(s.toISOString());

const specificDate = new Date();
console.log(specificDate);