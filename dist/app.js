/* Activar votación */
const circles = document.querySelectorAll('#circles span');

circles.forEach((circle) => {
  circle.addEventListener('click', () => {
    circles.forEach((c) => {
      c.classList.remove('bg-primary');
      c.classList.add('bg-slate-700');
    });

    circle.classList.remove('bg-slate-700');
    circle.classList.add('bg-primary', 'text-white');
  });
});

const submitButton = document.getElementById("submit");
const ratingSpan = document.querySelector("#thankyou .text-primary");

submitButton.addEventListener("click", function() {
  // Retrieve the selected rating
  const circles = document.querySelectorAll("#circles span");
  let selectedRating = 0;

  circles.forEach(function(circle) {
    if (circle.classList.contains("bg-primary")) {
      selectedRating = parseInt(circle.getAttribute("data-id"));
    }
  });

  // Update the rating in the thank you section
  ratingSpan.textContent = "You selected " + selectedRating + " out of 5";

  // Hide the rating section and show the thank you section
  const ratingSection = document.getElementById("ratingSection");
  const thankyouSection = document.getElementById("thankyou");
  ratingSection.style.display = "none";
  thankyouSection.style.display = "flex";
});