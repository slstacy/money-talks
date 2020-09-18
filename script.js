const careerContainer = document.querySelector(".career-container");
const careerOption = document.querySelectorAll(".career-option");
const careerCard = document.querySelectorAll(".career-card");

//

careerContainer.addEventListener("click", (e) => {
e.target.nextElementSibling.classList.toggle('open');
});
