let header__photo = document.querySelector(".js-header__photo");
let header__button = document.querySelector(".js-header__button");
let header__nameBackground = document.querySelector(".js-header__nameBackground");
let header__nameHideShow = document.querySelector(".js-header__nameHideShow");
let body = document.querySelector(".js-body");

header__button.addEventListener("click", () => {
    header__photo.classList.toggle("header__photo--hide");
    body.classList.toggle("body--brightBackground");
    header__button.classList.toggle("body--brightBackground");

    if (header__photo.classList.contains("header__photo--hide")) {
        header__nameBackground.innerText = "ciemne";
        header__nameHideShow.innerText = "Pokaż";
    } else {
        header__nameBackground.innerText = "jasne";
        header__nameHideShow.innerText = "Ukryj";
    }
});