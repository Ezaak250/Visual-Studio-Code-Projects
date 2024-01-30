//start of random color generator

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function() {
  document.body.style.backgroundColor = getRandomColor();
});

function getRandomColor() {
   var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
var color = "rgb(" + red + "," + green + "," + blue + ")";

  return color;
}
//End of random color generator


//start of DropDownMEnu
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


//End of DropDownMenu Code


//Start of Review Code
// local reviews data
const reviews = [
  {
    id: 1,
    name: 'Kyle Mabini',
    job: 'Boarder patrol Officer',
    img: "https://i.imgur.com/u8qFeX9.jpg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'Jackson Ponto',
    job: 'welder',
    img: "https://i.imgur.com/b4PLLXE.jpg",
    text: 'Helvetica artisan  thundercats blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'Bruce Wane',
    job: 'Superhero',
    img: "https://i.imgur.com/INzjlPR.jpg",
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'Jungkook',
    job: 'Kpop Idol',
    img: "https://i.imgur.com/Vnp9z9Q.jpg",
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];
// select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');
const jumpToStartBtn = document.querySelector('.start-of-selection');
const jumpToEndBtn = document.querySelector('.end-of-selection');

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', function () {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});

// show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}
// show next person
nextBtn.addEventListener('click', function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener('click', function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});
// show random person
randomBtn.addEventListener('click', function () {
  console.log('hello');

  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});

//Jump to Start

jumpToStartBtn.addEventListener('click', function(){
  currentItem = 0;
  showPerson(currentItem);

})


// Jump to End
jumpToEndBtn.addEventListener('click', function(){
  currentItem = 3;
  showPerson(currentItem);

})


//counter Js

// set inital value to zero
let count = 0;
// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");



function getRandomNumber() {
  return Math.floor(Math.random() * 21) - 10;
}

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count -= 1;
    } else if (styles.contains("increase")) {
      count += 2;
    }else if(styles.contains("random")){
      count += getRandomNumber();
    } else {
      count = 0;
    }

    if (count > 0) {
      value.style.color = "white";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "black";
    }
    value.textContent = count;
  });
});
