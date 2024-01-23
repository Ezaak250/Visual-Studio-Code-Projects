// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector(".nav-toggle");
const link1 = document.querySelector(".link1");
const dropdownMenuContent1 = document.querySelector(".dropdownMenuContent1");
const homeItem = document.querySelector(".homeItem");



navToggle.addEventListener("click", function () {
  // console.log(links.classList);
  // console.log(links.classList.contains("random"));
  // console.log(links.classList.contains("links"));
  // if (links.classList.contains("show-links")) {
  //   links.classList.remove("show-links");
  // } else {
  //   links.classList.add("show-links");
  // }
  link1.classList.toggle("show-link1");
});


//homeItem.addEventListener("click", function () {
//  event.preventDefault();
//  event.stopPropagation();
//  dropdownMenuContent1.classList.toggle("show-dropdownMenuContent1");
//});

homeItem.addEventListener("click", function (event) {
  event.preventDefault();

  console.log("Clicked on homeItem");

  // Loop through the list items within homeItem
  const dropdownMenuItems = homeItem.querySelectorAll("li.dropdownMenuContent1");
  dropdownMenuItems.forEach((item) => {
    item.classList.toggle("show-dropdownMenuContent1");
  });
});