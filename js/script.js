{
    const button = document.querySelector(".js-button");

    const togglePhotoBackgroundButton = () => {
        const photo = document.querySelector(".js-photo");
        const nameBackground = document.querySelector(".js-nameBackground");
        const nameHideShow = document.querySelector(".js-button--nameHideShow");
        const body = document.querySelector(".js-body");

        photo.classList.toggle("header__photo--hide");
        body.classList.toggle("body--brightBackground");
        button.classList.toggle("body--brightBackground");

        if (photo.classList.contains("header__photo--hide")) {
            nameBackground.innerText = "ciemne";
            nameHideShow.innerText = "Pokaż";
        } else {
            nameBackground.innerText = "jasne";
            nameHideShow.innerText = "Ukryj";
        }
    }

    const init = () => {
        button.addEventListener("click", togglePhotoBackgroundButton);
    }
    init();
}