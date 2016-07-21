# Udacity Frontend development - Webperformance project


## Installation

Clone this repo manually or use 
```
git clone https://github.com/Jepz/fed-webperformance.git
```

### Install the needed Dependencies
```
$ npm install gulp gulp-autoprefixer gulp-csso gulp-jshint gulp-uglify gulp-imagemin gulp-cleanCSS gulp-notify gulp-rename gulp-livereload gulp-cache del --save-dev
```

## Running it

Go to folder via terminal (drag and drop foler into terminal)
```
cd /lcoation of the project/
```

Running it locally:
```
python -m SimpleHTTPServer 8000
```

Use [ngrok](https://ngrok.com/) to test it with Google pageinsight.
Start it by adding this in the console:
```
./ngrok http 8000
```



## PageSpeed Score, get +90 for mobile and desktop

* Images have been resized with photoshop.
* Created a extra small image for index.html, `pizzaria-small.jpeg`
* Changed from `Open sans` to a web safe font, `Trebuchet MS`. Seem to gain very little in using Open sans.
* CSS is inlined.
* Added only what is being used fron Bootstrap
* Added viewport metadata to the header.


## Getting Rid of Jank
* Moved styles from updatePositions function
* Moved the sliding background on scroll position
* Switch to document.getElementsByClassName from document.querySelectorAll
* Move document.document.querySelectorAll(".randomPizzaContainer"); outside the for loop
* Changed `changePizzaSizes` sizes, had them be 25,33.3,50.
* Removed function `sizeSwitcher`, based on Udacity fix.
* determineDX() - Refactored to avoid Forced Synchronous Layout. 
* `updatePositions()` ; moved variables outside of the loop
* Overall tried to have variables declared outside of loops.



## Sources
- [Gulp for Beginners](https://css-tricks.com/gulp-for-beginners/)
- [Getting started with gulp](https://markgoodyear.com/2014/01/getting-started-with-gulp/)
- [Automate Your Tasks Easily with Gulp.js](https://scotch.io/tutorials/automate-your-tasks-easily-with-gulp-js)
- [Getting a working JShint file](https://github.com/johnpapa/ng-demos/blob/master/modular/.jshintrc)
- [Picked npm csso over cssnano](https://goalsmashers.github.io/css-minification-benchmark/)
- [Leverage Browser Caching](https://developers.google.com/speed/docs/insights/LeverageBrowserCaching)
- [JankFree](http://jankfree.org/)
- [CSS Websafe Fonts](http://www.w3schools.com/cssref/css_websafe_fonts.asp)
- [ECMASCRIPT 5 strict mode](http://ejohn.org/blog/ecmascript-5-strict-mode-json-and-more/)
- [What does “use strict” do in JavaScript, and what is the reasoning behind it?](http://stackoverflow.com/questions/1335851/what-does-use-strict-do-in-javascript-and-what-is-the-reasoning-behind-it)
- [Why Moving Elements With Translate() Is Better Than Pos:abs Top/left](http://www.paulirish.com/2012/why-moving-elements-with-translate-is-better-than-posabs-topleft/)

## Credits
- [Udacity forum - p4 pizza scrolling rasterize paint](https://discussions.udacity.com/t/p4-pizza-scrolling-rasterize-paint/30713/13)
- [Udacity - Browser Rendering Optimization](https://www.udacity.com/course/viewer#!/c-ud860-nd/l-4147498575/e-4154208580/m-4240308553)
- [Uncleoptimus](https://github.com/uncleoptimus/udacityP4/blob/gh-pages/views/js/main.js)
- [Sarika-C](https://github.com/Sarika-C/frontend-nanodegree-mobile-portfolio/blob/master/views/js/main.js/)
