
const accordions = document.querySelectorAll(".accordion");

accordions.forEach(accordion => {
    const icon = accordion.querySelector(".icon");
    const answer = accordion.querySelector(".answer");

    accordion.addEventListener("click", () => {
        if (icon.classList.contains("active")) {
            icon.classList.remove("active");
            answer.style.maxHeight = null;
        } else {
            icon.classList.add("active");
            answer.style.maxHeight = answer.scrollHeight + "px";
        }
    });
});

if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
            else {
                entry.target.classList.remove("show");
            }
        });
    });

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));
}
