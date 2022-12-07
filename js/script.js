let photo = document.querySelector(".js-photo");
let button = document.querySelector(".js-button");
let nameBackground = document.querySelector(".js-nameBackground");
let nameHideShow = document.querySelector(".js-nameHideShow");
let body = document.querySelector(".js-body");

button.addEventListener("click", () => {
    photo.classList.toggle("header__photo--hide");
    body.classList.toggle("body--brightBackground");
    button.classList.toggle("body--brightBackground");

    if (photo.classList.contains("photo--hide")) {
        nameBackground.innerText = "ciemne";
        nameHideShow.innerText = "Pokaż";
    } else {
        nameBackground.innerText = "jasne";
        nameHideShow.innerText = "Ukryj";
    }
});