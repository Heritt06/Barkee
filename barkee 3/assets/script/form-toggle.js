function toggleForm(selected) {
    const dogOption = document.querySelector(".hero-form-option-dog");
    const catOption = document.querySelector(".hero-form-option-cat");
    const dogForm = document.getElementById("dog-form");
    const catForm = document.getElementById("cat-form");

    if (selected === "dog") {
        dogOption.classList.add("active");
        catOption.classList.remove("active");
        dogForm.classList.add("active");
        catForm.classList.remove("active");
    } else {
        catOption.classList.add("active");
        dogOption.classList.remove("active");
        catForm.classList.add("active");
        dogForm.classList.remove("active");
    }
}
