let anchor = [
    {
        show:"Home",
        anchor:"index.html"
    },
    {
        show:"About",
        anchor:"about.html"
    },
    {
        show:"product",
        anchor:"product.html"
    },
    {
        show:"Service",
        anchor:"service.html"
    }
]

let s = document.querySelector('#nav');
s.innerHTML = anchor.map(a=>`
      <li><a href="${a.anchor}">${a.show}</a></li>
    `).join(" ")


 let a = [5,9,8,9,78,77] ;
 
 a.pop()
 console.log(a)

 a.push(88);
 console.log(a)

 a.splice(0,2);
 console.log(a);

 let c = a.toString()
 console.log(c);

 let f = a.forEach(r=>r)
 console.log(f)
 let f1 = a.map(r=>r)
 console.log(f1)
