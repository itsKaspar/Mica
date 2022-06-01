# Mica

Mica is a window management system designed for artistic research, practice, performance and presentation of various artworks.
It brings the basic concepts of windows to the web, letting users open, display, move, resize and close windows.

While implementing the standard use cases of windows, Mica is also designed to be adaptable for critical interfaces.
More of this can be found in the examples

## What is a window ?

- A window is something to look through
- A window is the frontier between the inside and the outside
- A window is a moment in which an opportunity can be taken
- A window can be opened and closed
- Sometimes people throw themselves out of them

## Dependencies

Mica was built using p5.js, a creative coding library

## Usage

To include it in your project add this script line to the top of your page.

```html
<script src="https://cdn.jsdelivr.net/gh/itsKaspar/Mica@master/build/mica.min.js"></script>
```

and then create a new window like this
first lets create an OS system

At first you'll need to create an instance of the windox manager.
then add windoxs

```js
let mica = new Mica(); // create an instance of the window manager
mica.addWindow(); // add a window
mica.draw(); // draw all windows

```

you can pass an options argument to the addWindow() function which takes these parameters

```js
let options = {
  pos = createVector(width/2, height/2); // center of window
  w = 400; // width
  h = 400; // height
}
```

To make the windows interactive you need to link them with the p5.js event system like so
```js
function mousePressed(){ mica.mousePressed(); }
function mouseReleased(){ mica.mouseReleased(); }
function mouseDragged(){ mica.mouseDragged(); }
```
