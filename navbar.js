let arrayofobject = [{
    "anchorlink":"navbar.html",
    "anchorshow":"store"
},
{
    "anchorlink":"mac.html",
    "anchorshow":"mac"
},
{
    "anchorlink":"iphone.html",
    "anchorshow":"iphone"
},{
    "anchorlink":"watch.html",
    "anchorshow":"watch"
},
{
    "anchorlink":"vison.html",
    "anchorshow":"vison"
}
];

let selectclass = document.querySelector('.nav');

selectclass.innerHTML = arrayofobject.map(item => `
         <li><a href="${item.anchorlink}"> ${item.anchorshow} </a></li>
    `)



