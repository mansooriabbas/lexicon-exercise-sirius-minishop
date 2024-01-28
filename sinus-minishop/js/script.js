// Code here!
const art1H3 = document.querySelector(".art-1 h3");
const art2P = document.querySelector(".art-2 p");
const navHome = document.querySelector("nav a");
const navContact = document.querySelectorAll("nav a");
const art1Btn = document.querySelector(".art-1 button");
const figure1 = document.querySelector("figure");
const footerAdress = document.querySelectorAll("footer article")[1];
const pFooter = footerAdress.querySelector("p");
const p = document.querySelectorAll("p");
const btn = document.querySelectorAll("button");
art1H3.innerText = "Potato";
const footerMenu = document.querySelectorAll("footer article")[0];
const footerHome = footerMenu.querySelectorAll("a")[0];
const logo = document.querySelector("header img")

navHome.innerText = "Start";

navContact[2].innerText = "Mail us";

art2P.innerText = "Nice Red Hoodie!";

art1Btn.style.backgroundColor = "teal";
art1Btn.style.color = "black";
figure1.style.backgroundColor = "red";
pFooter.innerText = `
Sinus skateboards 
Sinusvägen 23 
14562, Stockholm
`;

p.forEach((para, i) => {
  para.style.color = "green";
});

btn.forEach((b) => {
  b.innerText = "Add to cart";
});
footerHome.classList.add("active");
logo.classList.remove("logo")
console.log(logo);