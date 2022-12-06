const openBurgerButton = document.querySelector("#burger-open")
const closeBurgerButton = document.querySelector("#burger-close")
const mobileDropdown = document.querySelector("#mobile-dropdown")

openBurgerButton.addEventListener("click", function () {
    openBurgerButton.style.display = "none"
    closeBurgerButton.style.display = "block"
    mobileDropdown.style.display = "block"
})

closeBurgerButton.addEventListener("click", function () {
    openBurgerButton.style.display = "block"
    closeBurgerButton.style.display = "none"
    mobileDropdown.style.display = "none"
})