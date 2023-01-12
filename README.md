# # Rafał Romańczuk - my homepage
## demo 
 url:    [https://rrrrafal.github.io/homepage/]
![photo of this page](https://raw.githubusercontent.com/rrrrafal/homepage/main/images/webpage.png)

## destcription
 
A webside presents me, i.e. Rafał Romanczuk.
The page contains:

 - description of me
 - my interests and passions
 - description of my proffesion
 - my contact information
  
The page can be viewed with both light and dark backgrounds.
You can also hide the main photo.

## Conventions used
  - HTML
  - Java Script
  - BEM
  - CSS

## How to change the background and hide photo
I used java script to change the background and hide photo. The JS-code looks like this:
``` javascript
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
```

Please press the button located at the top of the page under the photo:

![photo of the button](https://raw.githubusercontent.com/rrrrafal/homepage/main/images/button.png)

## Table with my favorite music
The table contains "overflow" functions in css, thanks to which we can view it more easily on smaller screens:
```css
.table {
border-collapse: collapse;
width: 100%;
overflow-x: auto;
}
```
![how the overflow function works](https://media.giphy.com/media/T53lZS7jdyWeRvNM6n/giphy.gif)




