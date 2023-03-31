const faqBtn = document.querySelectorAll("article.faq-card__faq div.wrapper");


const resetActive = () => {
    faqBtn.forEach((element) => {
        element.parentElement.classList.remove("active");
    });
};


faqBtn.forEach((element) => {
    element.addEventListener("click", () => {
        if (!element.parentElement.classList.contains("active")){
            resetActive();
            element.parentElement.classList.add("active");
        } else {
            resetActive();
        }
    });
});