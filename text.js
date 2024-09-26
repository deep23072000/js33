let d = {
    a:2,
    b:4,
    fh:function(){
        console.log(this.a + this.b);
    },
    g(){
        console.log(this.a + this.b);
    }
}

d.fh();
d.g();


//method and function
//this in js
//