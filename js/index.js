let buttonMobile = document.querySelector("#mobile-button");
let dropdown = document.querySelector(".dropdown");
let dropdownMenu = document.querySelectorAll(`.dropdown li`);

buttonMobile.addEventListener("click", () => {
    if (buttonMobile.classList.contains("close")) {
        buttonMobile.classList.remove("close");
        buttonMobile.classList.add("open");

        dropdown.style.right = "0%";
        dropdown.style.width = "auto";
        for (let i = 0; i < dropdownMenu.length; i++) {
            dropdownMenu[i].style.display = "block"
        }
    } else {
        buttonMobile.classList.remove("open");
        buttonMobile.classList.add("close");

        dropdown.style.right = "-100%";
        dropdown.style.width = "0";
        for (let i = 0; i < dropdownMenu.length; i++) {
            dropdownMenu[i].style.display = "none"
        }
    }

})