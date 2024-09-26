let obj = {
    name:"deepak",
    "course":"FSD",
    'batch':"p33",
    "num":45,
    "num1":45,
    "bool":10<11,
    run:function(){
        console.log(this.num + this.num1);
    },
    arr:[5,5,7,77,8,8]
}

//Destructuring of object
let {num1,num,course} = obj;

console.log(obj.name)
console.log(course)
console.log(num1)
console.log(num)
obj.run()
obj.run()
console.log(obj.arr[4])





let arr = [5,"gh",1>3,function(){},{},class a{}];