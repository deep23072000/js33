let arrofobj = [
    {
        "cimg":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEw2ce40BkWdXvgMffW8BefaU8jogoAzSNDA&s",
        "cname":"watch",
        "crating":"4.5",
        "cbrand":"quartz",
        "cprize":"999"
    },
    {
        "cimg":"https://imageio.forbes.com/specials-images/imageserve/65df2e0562b5d061b718a4af/Skin-and-hair-care-beauty-product-mock-up--lotion-bottle--oil--cream--isolated-on/960x0.jpg?format=jpg&width=960",
        "cname":"hair oil",
        "crating":"4.2",
        "cbrand":"kesh",
        "cprize":"398"
    },
    {
        "cimg":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEw2ce40BkWdXvgMffW8BefaU8jogoAzSNDA&s",
        "cname":"camera",
        "crating":"4.9",
        "cbrand":"sony",
        "cprize":"65000"
    },{
        "cimg":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRie-FfCkmztxAGUP4NuiuK49VqL9zLmqiHcIzRRPDcF50ANbOAD5N68fW2MZVSbU4TCcA&usqp=CAU",
        "cname":"headphone",
        "crating":"4.5",
        "cbrand":"boat",
        "cprize":"2499"
    },
    {
        "cimg":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEw2ce40BkWdXvgMffW8BefaU8jogoAzSNDA&s",
        "cname":"watch",
        "crating":"4.5",
        "cbrand":"quartz",
        "cprize":"999"
    },
    {
        "cimg":"./image.jpg",
        "cname":"watch",
        "crating":"4.5",
        "cbrand":"quartz",
        "cprize":"999"
    }
]


let show = document.querySelector('#output');
show.innerHTML = arrofobj.map(e=>`
    <div id="card">
        <img src="${e.cimg}" alt="">
        <div id="cardc">
            <div> ${e.cname} </div>
            <div> ${e.crating} </div>
            <div> ${e.cbrand} </div>
            <div> ${e.cprize} </div>
        </div>
        <button> buy now </button>

    </div>  
    `).join("");

