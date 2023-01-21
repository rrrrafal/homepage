# # Rafał Romańczuk - my homepage
## Demo 
 
 url:    [https://rrrrafal.github.io/homepage/]

![photo of this page](https://raw.githubusercontent.com/rrrrafal/homepage/main/images/webpage.png)

## Destcription
 
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
  - ES6+ Features

## How to change the background and hide photo

The code contains six functions written in Java Script such as:
- background changing (body and button)
- hiding or showing the photo
- change text in the button.  
This is an example function to hide a photo
``` javascript
    
    const hidePhoto = () => {
        const photo = document.querySelector(".js-photo");
        photo.classList.toggle("header__photo--hide");
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




