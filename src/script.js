const allFaq = document.querySelectorAll(".question");
console.log(allFaq);

allFaq.forEach((faq) => {
  faq.addEventListener("click", (e) => {
    let closestElement = e.target.closest(".faq");
    let activeFaq = document.querySelectorAll(".faq.active");

    closestElement.classList.add("active");

    if (activeFaq.length > 0) {
      activeFaq.forEach((active) => {
        active.classList.remove("active");
      });
    }
  });
});
