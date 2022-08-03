// Script for navigation bar
const manuBtn = document.querySelector(".header-navbar-hamburger");
const menuitem = document.querySelector(".header-navbar-nav-menu");
const navLink = document.querySelectorAll(".header-navbar-nav-menu-item-link");
manuBtn.addEventListener("click", () => {
    manuBtn.classList.toggle("active");
    menuitem.classList.toggle("active");
});

for(i = 0; i < navLink.length; i++){
    navLink[i].addEventListener("click", () => {
    manuBtn.classList.toggle("active");
    menuitem.classList.toggle("active");
  });
}

// Script for hero slider
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay: true,
    autoplayTimeout: 4000,
    dots: false,
    nav: true,
    responsive:{
        0:{
            items:1,
            nav: false
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

// Javascript for product section
// let redMoreBtn = document.querySelectorAll('.product-item-card-btn');
// let redMore = document.querySelectorAll('.product-item-card-read-more');

// for(let i = 0; i <= redMoreBtn.length; i++){
//     redMoreBtn[i].addEventListener("click", function(){
//         redMore[i].classList.toggle("active");
//     });
// };

// Portfolio image slider image filter's script

let allBtn = document.querySelector(".all-btn");
let fcBtn = document.querySelector(".fc-btn");
let appBtn = document.querySelector(".app-btn");
let softBtn = document.querySelector(".soft-btn");
let allItem = document.querySelectorAll(".all-item");
let fcItem = document.querySelectorAll(".fc-item");
let appItem = document.querySelectorAll(".app-item");
let softItem = document.querySelectorAll(".soft-item");

allBtn.addEventListener("click", function(){
  for(let i = 0; i < allItem.length; i++){
    allItem[i].classList.add('active');
  }
});

fcBtn.addEventListener("click", function(){
  for(let i = 0; i < fcItem.length; i++){
    fcItem[i].classList.add('active');
  }
  for(let i =0; i < appItem.length; i++){
    appItem[i].classList.remove('active');
  }
  for(let i = 0; i < softItem.length; i++){
    softItem[i].classList.remove('active');
  }
});

appBtn.addEventListener("click", function(){
  for(let i = 0; i < fcItem.length; i++){
    fcItem[i].classList.remove('active');
  }
  for(let i =0; i < appItem.length; i++){
    appItem[i].classList.add('active');
  }
  for(let i = 0; i < softItem.length; i++){
    softItem[i].classList.remove('active');
  }
});

softBtn.addEventListener("click", function(){
  for(let i = 0; i < fcItem.length; i++){
    fcItem[i].classList.remove('active');
  }
  for(let i =0; i < appItem.length; i++){
    appItem[i].classList.remove('active');
  }
  for(let i = 0; i < softItem.length; i++){
    softItem[i].classList.add('active');
  }
});

// Script for send email
function sendEmail(){
  Email.send({
    Host : "smtp.gmail.com",
    Username : "abumdnayeemkhan@gmial.com",
    Password : "mym0ther5@ss",
    To : 'info.fccbd@gmail.com',
    From : document.getElementById("email").value,
    Subject : "countact form message",
    Body : "And this is the body"
}).then(
  message => alert(message)
);
}

// Year for copyright start
let copyYear = document.querySelector(".copyYear");
let copyrightDate = new Date();
let copyrightYear = copyrightDate.getFullYear();
copyYear.innerHTML = copyrightYear;
// Year for copyright end

// script for preloader
let loder = document.querySelector('.preloader');
window.addEventListener("load", function(){
  loder.style.display="none";
});