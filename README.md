# Mica Windows

- A window is something to look through
- A window is the frontier between the inside and the outside
- A window is a moment in which an opportunity can be taken
- A window can be opened and closed
- Sometimes people throw themselves out of them


## Usage

This library is constructed for use with p5.js, a simple lightweight creative coding javascript library.
To include it in your project add this script line to the top of your page.

```html
<script src="https://cdn.jsdelivr.net/gh/itsKaspar/p5.Windoxs@master/build/mica.min.js"></script>
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
