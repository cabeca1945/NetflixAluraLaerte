var logo = document.getElementById("logo");

var user1 = document.getElementById("user1");
var user2 = document.getElementById("user2");
var user3 = document.getElementById("user3");

user1.remove();
user2.remove();
user3.remove();

var mainWindow = document.getElementById("mainWindow");
mainWindow.remove();

setTimeout(() => {
    logo.remove();

    document.body.appendChild(user1);
    document.body.appendChild(user2);
    document.body.appendChild(user3);

    setTimeout(() => {
        var lancamentosTxt = document.getElementById("lançamentos");
        lancamentosTxt.style.opacity = 1;
    }, 3000);
}, 2000);

function gotoMainPage() {
    user1.remove();
    user2.remove();
    user3.remove();

    document.body.appendChild(mainWindow);
}

var booleanBanner = false;

function hoverBanner() {
    console.log("The mouse is enter...");

    booleanBanner = true;
}

function altHoverBanner() {
    console.log("The mouse is over...");

    booleanBanner = false;
}

var xx = 0;

setInterval(() => {
    if(booleanBanner) {
        var banner01 = document.getElementById("banner01");
        var banner1 = document.getElementById("banner1");
        var banner2 = document.getElementById("banner2");
        var banner3 = document.getElementById("banner3");

        xx+=1;

        banner01.style.marginLeft = `${-500+xx}px`;

        banner1.style.marginLeft = `${xx}px`;
        banner2.style.marginLeft = `${500+xx}px`;
        banner3.style.marginLeft = `${1000+xx}px`;

        banner1.style.opacity = xx / 1000;
        banner2.style.opacity = xx / 1000;
        banner3.style.opacity = xx / 1000;

        banner1.style.boxShadow = `2.5px 2.5px 30px rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;
        banner2.style.boxShadow = `2.5px 2.5px 30px rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;

        if(xx >= 400) {
            xx = 0;
        }
    }
    
}, 1000 / 120);