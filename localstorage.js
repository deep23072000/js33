let num = 90;
let obj = {
    "name":"Deepak",
    "age":45
};
let convertedobj = JSON.stringify(obj);
window.localStorage.setItem('val',num);
window.localStorage.setItem('userinfo',convertedobj);

let arrofobj = [
    {
        "name":"Deepak",
        "age":45
    },
    {
        "name":"Ankit",
        "age":40
    }
];
let convertedarrofobj = JSON.stringify(arrofobj);
window.localStorage.setItem('usersdata',convertedarrofobj);
// ==============retrive value from local storage
let fetcheddata = window.localStorage.getItem('userinfo');
let convert_fetched_data = JSON.parse(fetcheddata);
console.log(convert_fetched_data)



