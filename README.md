# Udacity Frontend development - Webperformance project


## Installation

Clone this repo manually or use 
```
git clone https://github.com/Jepz/fed-webperformance.git
``

## Running it

Running it locally:
```
python -m SimpleHTTPServer 8000
```


Use [ngrok](https://ngrok.com/) to test it with Google pageinsight.
Start it by adding this in the console:
```
./ngrok http 8000
```

## What have been done
* Using gulp for taskhandling
* 

### Changes in file structure
I didn't like it was originally setup, so moved all the scripts, styles, html, and images to their own folders.

app
- images
	- 2048.png
	- cam_be_like.jpb
	- mobilewebdev.jpg
	- pizza.png
	- pizzeria.jpg
	- profilepic.jpg
- index.html
- scripts
	- perfmatters.js
	- pizza.js (originaly main.js)
- styles
	- bootstrap-grid.css
	- pizza.css (originally style.css for pizza.html)
	- print.css
	- style.css
- views
	- pizza.html
	- project-2048.html
	- project-mobile.html
	- project-webperf.html
dist

gulpfile.js
package.json
README.md

App is working folder, dist is the optimized and minifyed files.

### Images
* Gone through Photoshop
* Added optimizer task in Gulp

### Index.html
* made addec 'media="print"' to stylesheet print
* changes links to fit the new structure


### Pizza.html
* Added Googles recommended [OptimizeCSSDelivery](https://developers.google.com/speed/docs/insights/OptimizeCSSDelivery) script.

### Pizza.js
* added `col-xs-6` to classList.add for mobile improvments
* Modified `updatedPostions()` 
* changed `changePizzaSizes()`
* Generally moved create variables outside loops
* Generally changed from `querySelector` to `getElementById`

## Sources
- [Gulp for Beginners](https://css-tricks.com/gulp-for-beginners/)
- [Getting started with gulp](https://markgoodyear.com/2014/01/getting-started-with-gulp/)
- [Automate Your Tasks Easily with Gulp.js](https://scotch.io/tutorials/automate-your-tasks-easily-with-gulp-js)
- [Getting a working JShint file](https://github.com/johnpapa/ng-demos/blob/master/modular/.jshintrc)
- [Picked npm csso over cssnano](https://goalsmashers.github.io/css-minification-benchmark/)
- [Leverage Browser Caching](https://developers.google.com/speed/docs/insights/LeverageBrowserCaching)
- [JankFree](http://jankfree.org/)
