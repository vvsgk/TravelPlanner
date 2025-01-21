const nav = document.querySelector(".tabs-container");

const offset = nav.offsetTop;

window.addEventListener("scroll", function () {
  if (window.scrollY >= offset) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
});

const text1_options = [
  "Travel far, travel wide, travel deep, travel light.",
  "Adventure awaits beyond the horizon",
  "Life is short, and the world is wide.",
  "Collect moments, not things"
];
const text2_options = [
  "-Andrew Zimmern",
  "-Amelia Earhart",
  "-David Mitchell",
  "-Ibn Battuta"
];
const color_options = ["#dbc4f0", "#cbf1fa", "#7FE0EB", "#6CE5B1"];
const image_options = [
  "./asserts/images/cousel1.jpg",
  "./asserts/images/cousel2.jpg",
  "./asserts/images/cousel3.jpg",
  "./asserts/images/cousel4.jpg",
];

var i = 0;
const currentOptionText1 = document.getElementById("current-option-text1");
const currentOptionText2 = document.getElementById("current-option-text2");
const currentOptionImage = document.getElementById("image");
const carousel = document.getElementById("carousel-wrapper");
const optionPrevious = document.getElementById("previous-option");
const optionNext = document.getElementById("next-option");

function changeCarouselContent() {
  i = (i + 1) % text1_options.length;

  currentOptionText1.dataset.nextText = text1_options[i];
  currentOptionText2.dataset.nextText = text2_options[i];

  carousel.style.background = color_options[i];
  carousel.classList.add("anim-next");

  setTimeout(() => {
    currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
  }, 455);

  setTimeout(() => {
    currentOptionText1.innerText = text1_options[i];
    currentOptionText2.innerText = text2_options[i];
    carousel.classList.remove("anim-next");
  }, 650);
}

function changeCarouselContentReverse() {
  if (i === 0) {
    i = text1_options.length;
  }
  i = i - 1;
  currentOptionText1.dataset.previousText = text1_options[i];
  currentOptionText2.dataset.previousText = text2_options[i];

  carousel.style.background = color_options[i];
  carousel.classList.add("anim-previous");

  setTimeout(() => {
    currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
  }, 455);

  setTimeout(() => {
    currentOptionText1.innerText = text1_options[i];
    currentOptionText2.innerText = text2_options[i];
    carousel.classList.remove("anim-previous");
  }, 650);
}

optionNext.onclick = function () {
  changeCarouselContent();
};

optionPrevious.onclick = function () {
  changeCarouselContentReverse();
};

setInterval(changeCarouselContent, 3000);
