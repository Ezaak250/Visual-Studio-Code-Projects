// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
const homeClick = document.querySelector(".home-click");
const homeLinks = document.querySelector(".homeLinks");
const aboutClick = document.querySelector(".about-click");
const aboutLinks = document.querySelector(".aboutLinks");
const projectClick = document.querySelector(".project-click");
const projectLinks = document.querySelector(".projectLinks");

navToggle.addEventListener('click', function(){

   links.classList.toggle("show-links");
});

homeClick.addEventListener('click', function(){          
    homeLinks.classList.toggle("home-show-link");
});

aboutClick.addEventListener('click', function(){      
    aboutLinks.classList.toggle("about-show-link");
});

projectClick.addEventListener('click', function(){      
    projectLinks.classList.toggle("project-show-link");
});