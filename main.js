// VARIABLES

const modal = document.querySelector(".modal");
const btn = document.querySelector(".btn");
const closeBtn = document.querySelector(".close__btn");

// FUNCTIONS

const openModal = (e) => {
  e.preventDefault();
  modal.style.display = "block";
};

const closeModal = () => {
  modal.style.display = "none";
};

// EVENT LISTENERS

btn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
modal.addEventListener("click", closeModal);
