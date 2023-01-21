{
    const button = document.querySelector(".js-button");
    const body = document.querySelector(".js-body");

    const changeBackground = (element) => {
        element.classList.toggle("body--brightBackground");
    }
    const hidePhoto = () => {
        const photo = document.querySelector(".js-photo");
        photo.classList.toggle("header__photo--hide");
    }

    const changeTextButton = () => {
        const nameBackground = document.querySelector(".js-nameBackground");
        const nameHideShow = document.querySelector(".js-button--nameHideShow");

        if (body.classList.contains("body--brightBackground")) {
            nameHideShow.innerText = "Pokaż";
            nameBackground.innerText = "ciemne";
        } else {
            nameHideShow.innerText = "Ukryj";
            nameBackground.innerText = "jasne";
        }
    }

    const activityButton = () => {

        changeBackground(body);
        changeBackground(button);
        hidePhoto();
        changeTextButton();
    }

    const init = () => {
        button.addEventListener("click", activityButton);
    }

    init();
}