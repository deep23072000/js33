let str = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur libero voluptatum soluta facilis optio ut aperiam natus laboriosam quos nobis. Expedita sunt laboriosam quae ad recusandae accusantium, vitae maiores culpa!";

// for(let i in str){
//     console.log(i);
// }
// let storestr = ""
// for(let i of str){
//     if(i !== "i"){
//         storestr = storestr + i;
//     }
// }
// console.log(storestr);

// console.log(str.replaceAll(" ",""));
// console.log(str.length);
// console.log(str.replace(" ",""));

// let s = str.slice(42,90);
// console.log(s);
// console.log(s.replaceAll(" ",""));


let a = "";
for(let i in str){
    if(i > 42 && i < 90){
        if(str[i] !== " "){
            a = a + str[i];
        }
    }else{
        a = a + str[i];
    }
    
}

console.log(a)