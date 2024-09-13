"use strict";

function output(){

let imgurl = document.querySelector('.userimageurl').value;
let username = document.querySelector('.username').value;
let userproffession = document.querySelector('.userprofession').value;
let useremail = document.querySelector('.useremail').value;
let usermobile = document.querySelector('.usermobile').value;
let useraddress = document.querySelector('.useraddress').value;


let card = ` <section class="carddesign">
        <article>
            <div><img src="${imgurl}" alt=""></div>
            <div>
                <h4>${username}</h4>
                <h5>${userproffession}</h5>
                <h6>${useremail}</h6>
                <h6>${usermobile}</h6>
            </div>
        </article>
        <article>
            <div>${useraddress}</div>
        </article>
    </section>`;


  let selectshowcard = document.querySelector('.showcard');
  selectshowcard.innerHTML = card;

//   print()

  return false;

}
