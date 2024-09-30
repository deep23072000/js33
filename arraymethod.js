// let arr = [6,7,8,9,5,4,8];
// console.log(arr)
// arr.push(78);
// console.log(arr)

// arr.pop();
// console.log(arr);

// arr.shift();
// console.log(arr)

// arr.unshift(45);
// console.log(arr)



// delete arr[3];
// console.log(arr);

// arr.splice(arr.length-2,1);
// console.log(arr);

// arr.splice(arr.length,0,90);
// console.log(arr);

// arr.splice(arr.length,0,89,70,56,45)
// console.log(arr);

// arr.splice(0,1);
// console.log(arr);//shift

// arr.splice(0,0,90)
// console.log(arr)//unshift


// arr.splice(3,0,"heelo","hii","welcome")
// console.log(arr);

// arr.splice(6,1,"delete element")
// console.log(arr)

let arr = [6,7,8,9,5,4,8];

arr.sort(function(a,b){return a-b});
console.log(arr);

arr.sort(function(a,b){return b-a});
console.log(arr)

let sumofarray = arr.reduce(function(a,b){return a+b})
console.log(sumofarray)

let alp = ["g","tr","yyy","qqq"]
alp.sort();
console.log(alp);

alp.reverse();
console.log(alp)