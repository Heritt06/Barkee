document.querySelectorAll(".accordion-header").forEach(button => {
    button.addEventListener("click", () => {
        let accordionItem = button.parentElement;
        let content = button.nextElementSibling;
        
        if (accordionItem.classList.contains("active")) {
            content.style.maxHeight = "0px";
            content.style.paddingTop = "0px";
            content.style.paddingBottom = "0px";
            accordionItem.classList.remove("active");
        } else {
            content.style.maxHeight = "100px";
            content.style.paddingTop = "12px";
            content.style.paddingBottom = "26px";
            accordionItem.classList.add("active");
        }
    });
});