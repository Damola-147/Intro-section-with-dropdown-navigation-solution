# Frontend Mentor - Intro section with dropdown navigation solution

This is a solution to the [Intro section with dropdown navigation challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I Learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the relevant dropdown menus on desktop and mobile when interacting with the navigation links
- View the optimal layout for the content depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

- Mobile View:

![Mobile View](./design/mobile.JPG)

- Desktop View:

![Desktop View](./design/desktop.JPG)


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [view live](https://damola-147.github.io/Intro-section-with-dropdown-navigation-solution/#)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- JavaScript

### What I Learned

I was in a difficult place where I needed to change the image on the page for different screen sizes. I needed to replace the hero-image. This is simple to do with JavaScript, but I wanted to see if there was another, even simpler, way to do this. To change the image source, one should be able to access the image's `src` property. But I read on **Stackoverflow** that the `content` property could do the trick (There were myriads of solutions to this problem).

```css
.hero {
    width: 50%;
    height: 100%;
    overflow: hidden;
}

.hero-img {
    content: url('./images/image-hero-desktop.png');
    width: 100%;
    height: 100%;
}

/* Media guery for mobile */
.hero {
    overflow: hidden;
    width: 100%;
}
    
.hero-img {
    content: url('./images/image-hero-mobile.png');
}
```

### Continued development

I tried using the mobile-first approach to solve this challenge, but that proved to be quite difficult and my codes soon became messsy. I want to learn more about the mobile-first approach to styling web-pages and use it more often.

### Useful resources

- Stackoverflow: [Setting the equivalent of a scr attribute of an img tag in CSS](https://stackoverflow.com/q/2182716/15480995)


## Author

- Frontend Mentor - [@Damola-147](https://www.frontendmentor.io/profile/Damola-147/)
- Twitter - [@adebiyi_stoke](https://www.twitter.com/adebiyi_stoke/)
