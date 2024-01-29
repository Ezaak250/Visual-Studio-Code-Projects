//Image flipper

const imageArray = ["https://i.imgur.com/4hDgRHe.jpg)","https://i.imgur.com/3VFdIz8.jpg", "https://i.imgur.com/PtgPGFW.jpg", "https://i.imgur.com/4JqI1zA.jpg", "https://i.imgur.com/VKkdz2e.jpg", "https://i.imgur.com/KwqOL9Q.png", "https://i.imgur.com/JIBs8VL.png" ];   
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomSeletionFromArray = getRandomNumber();
  // console.log(randomNumber);

  imageThatsBeenSelected = imageArray[randomSeletionFromArray]

  document.body.style.backgroundImage = `url("${imageThatsBeenSelected}")`;
  color.textContent = imageArray[randomSeletionFromArray];
});

function getRandomNumber() {
  return Math.floor(Math.random() * imageArray.length);
}
