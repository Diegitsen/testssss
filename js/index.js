// data
var app = new Vue({
  el: '#app',
  data: {
    intro: "I'm Diego Salcedo",
    message: 'Hello Vue!',
    aboutItems: [
      { name: "Designer",
        description: "I value simple content structure, clean design patterns, and thoughtful interactions."
      }
    ],

    projects: [
      { name: "Glix",
        description: "An aesthetic music player",
        img: "img/glixlogo.png"},
    ],
    contact: "please contact me............"
  },
  methods: {
    goPortfolio: function(){
      portfolio.scrollIntoView();
    },
    goAbout: function(){
      about.scrollIntoView();
    },
    goContact: function(){
      contact.scrollIntoView();
    },
    goHome: function(){
      banner.scrollIntoView();
    }
  }
})

// parameters
let banner = document.getElementById("banner")
let logo = document.getElementById("logo");
let navbar = document.getElementById("navbar");
let sticky = navbar.offsetTop;
let about = document.getElementById("about");
let footer = document.getElementById("footer");
let portfolio = document.getElementById("navigate-portfolio");
let contact = document.getElementById("contact")
let nav_about = document.getElementById("nav-about");
let nav_portfolio = document.querySelectorAll(".nav-portfolio");
let nav_contact = document.getElementById("nav-contact");

// functions
function navbarTransition() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    logo.classList.remove("d-none")
    about.classList.add("sticky-about-modified")
  } else {
    navbar.classList.remove("sticky");
    logo.classList.add("d-none")
    about.classList.remove("sticky-about-modified")
  }
}
function navigateToFooter() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        // you're at the bottom of the page
        footer.classList.add("show")
    } else {
        footer.classList.remove("show")
    }
}
function loadDynamicBannerText() {
    new Typed('#banner-typed-text', {
      strings: ["Amo crear cosas","Amo programar" ,"Amo desarollar apps en Android"],
      typeSpeed: 60,
      loop: true
    });
};

// execute functions

loadDynamicBannerText();

window.onscroll = function() {
    navbarTransition();
    navigateToFooter();
};