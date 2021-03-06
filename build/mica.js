(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
class Mica{
	constructor(){
		this.windows = [];
	}

	draw(){
		for(let i = this.windows.length - 1; i >= 0; i--){
			this.windows[i].draw();
		}
	}

	mousePressed(){
		for(let i = 0; i < this.windows.length; i++){
			if(this.windows[i].mousePressed()){ // if a window was closed or moved
				break;
			}
		}
		this.clickWindow();
	}

	mouseReleased(){
		for(let i = 0; i < this.windows.length; i++){
			this.windows[i].mouseReleased();
		}
		this.removewindows(); // clean up windows
	}

	mouseDragged(){
		for(let i = 0; i < this.windows.length; i++){
			if(this.windows[i].mouseDragged()){ // if a window is being moved
				break;
			}
		}
	}

	addWindow(w=new MicaWindow()){
		this.windows.splice(0,0,w); // insert window at beggining
		this.focusWindow();
	}

	removewindows(i){
		for(let i = 0; i < this.windows.length; i++){
			if(this.windows[i].display == false){
				this.windows.splice(i,1);
			}
		}
	}

	clickWindow(){
		for(let i = 0; i < this.windows.length; i++){ // in order of appearance check if clicked
				if(this.windows[i].isMouseOnWindow()){
					let w = this.windows.splice(i,1)[0]; // remove window from stack
					this.windows.splice(0,0,w); // reinsert element at beginning
					this.focusWindow();
					break;
				}
			}
		}

	focusWindow(){
		for(let i = 0; i < this.windows.length; i++){
				this.windows[i].setFocus(false); // unset focus on all other windows
		}
		this.windows[0].setFocus(true); // set focus on window
	}
}

class MicaWindow{
	constructor(o){

		// # Size and Position
    this.w = width / 2;
    this.h = height / 2;
		this.w05 = this.w / 2;
		this.h05 = this.h / 2
		let x = random(0 + this.w05, width  - this.w05);
		let y = random(0 + this.h05, height - this.h05);
    this.pos = createVector(x, y);

		// # Graphics Settings
    this.s = 25; // space
		this.s05 = this.s / 2;
		this.p = 10; // padding
		this.angle = 5; // angle at which the windows have rounded edges

		// # Theme Settings
		this.col1 = color('#827397');
		this.col2 = color('#E9D5DA');

		// # Window State
		this.display = true;
		this.focus = true; // selected window
		this.hold = false; // holding the window for when the mouse is moving it

		// # Content
		this.content = "rauschen refers to states of aggression"
		// for(let i = 0; i < 1800; i++){
		// 	if(int(random(3)) % 3 == 0){
		// 		this.content += str(int(random(2)));
		// 	}
		// }

		this.text = "hell wurld"
		textSize(25);
		textWrap(CHAR);
	}

	// # Window Content

	setText(text){
		this.text = text;
	}

	setGraphics(){

	}

	setFocus(bool){
		this.focus = bool;
	}

  //====================================================

  // DRAWING

  //====================================================

	draw() {

		rectMode(CENTER);

		// # Window Shadow
		noStroke();
		fill(0,30);
		let shadow = 5;
		rect(this.pos.x - shadow, this.pos.y + shadow, this.w, this.h, this.angle);

    // # Window Frame
		strokeWeight(1);
		if(this.focus){
			fill(255);
			stroke(0);
		}
		else{
			stroke('#555555');
			fill('#eeeeee');
		}

    rect(this.pos.x, this.pos.y, this.w, this.h, this.angle);

		// # Window Settings

		if(this.focus){
			linearGradient(this.pos.x - this.w05, this.pos.y - this.h05,
				 						 this.pos.x + this.w05, this.pos.y - this.h05 + this.s,
										 this.col1, this.col2);
		}
		else{
			fill('#777777');
		}

		rect(this.pos.x, this.pos.y - this.h05 + this.s05, this.w, this.s, this.angle, this.angle, 0, 0);

		// Draw Grab Lines
		// strokeWeight(0.5);
		// stroke(255,20);
		// line(this.pos.x - this.w05,  					this.pos.y - this.h05 + this.s05  ,
		// 		 this.pos.x + this.w05 - this.s,  this.pos.y - this.h05 + this.s05 );
		// line(this.pos.x - this.w05,  					this.pos.y - this.h05 + this.s05 + this.s/6 ,
	 	//  		 this.pos.x + this.w05 - this.s,  this.pos.y - this.h05 + this.s05 + this.s/6);
		// line(this.pos.x - this.w05, 					this.pos.y - this.h05 + this.s05 - this.s/6 ,
		// 		 this.pos.x + this.w05 - this.s,  this.pos.y - this.h05 + this.s05 - this.s/6);
		// line(this.pos.x - this.w05,  					this.pos.y - this.h05 + this.s05 + 2*this.s/6 ,
		// 		 this.pos.x + this.w05 - this.s,  this.pos.y - this.h05 + this.s05 + 2*this.s/6);
		// line(this.pos.x - this.w05,  					this.pos.y - this.h05 + this.s05 - 2*this.s/6 ,
		// 		 this.pos.x + this.w05 - this.s,  this.pos.y - this.h05 + this.s05 - 2*this.s/6);

		// # Draw Cross
		strokeWeight(2);
		if(this.focus){
			stroke('#ffffff');
		}
		else{
			stroke('#bbbbbb');
		}

		drawCross(this.pos.x + this.w05 - this.s05, this.pos.y - this.h05 + this.s05, this.s / 8);

    // # Draw Text Content

		noStroke();
		fill(0);
		rectMode(CORNER);

		// textAlign(JUSTIFY);
		let tx = this.pos.x - this.w05 + this.p; // corner x
		let ty = this.pos.y - this.h05 + this.p + this.s //+ textAscent(); // corner y
		let tw = this.w - this.p * 2;// text width
		let th = this.h - this.p * 2// text height
    text(this.content,tx,ty,tw,th);

		//let a = font.textBounds(this.content,tx,ty)
		// console.log("text box height = " + str(this.h - this.p*2));
		// console.log("actual text height = " + str(a.w));
		// console.log("text ascent = " + str(textAscent()));

	}

	//====================================================

  // WHERE IS MOUSE ?

  //====================================================

	isMouseOnCross(){
		return	mouseX > this.pos.x + this.w05 - this.s && mouseX < this.pos.x + this.w05 + this.s &&
						mouseY > this.pos.y - this.h05 - this.s && mouseY < this.pos.y - this.h05 + this.s;
	}

	isMouseOnTopBar(){
		return	mouseX > this.pos.x - this.w05 && mouseX < this.pos.x + this.w05 &&
						mouseY > this.pos.y - this.h05 && mouseY < this.pos.y - this.h05 + this.s ;
	}

	isMouseOnWindow(){
		return  mouseX > this.pos.x - this.w05 && mouseX < this.pos.x + this.w05 &&
						mouseY > this.pos.y - this.h05 && mouseY < this.pos.y + this.h05 ;
	}

  //====================================================

  // ACTIONS

  //====================================================

	mousePressed(){
		if(this.isMouseOnCross()){ // if mouse is pressed on X then close
			this.close();
			return true;
		}
		else if(this.isMouseOnTopBar()){  // if mouse is pressed on top bar then hold
			this.hold = true;
			return true;
		}
		return false;
	}

	mouseReleased(){
		this.hold = false;
	}

	mouseDragged(){
		if(	this.isMouseOnTopBar() || this.hold ){
			this.move();
			return true;
		}
		return false;
	}

  move(){
		this.pos.x += (mouseX - pmouseX);
		this.pos.y += (mouseY - pmouseY);
  }

	close(){
		this.display = false;
		return true;
	}

}

function linearGradient(sX, sY, eX, eY, colS, colE){
	let gradient = drawingContext.createLinearGradient(sX, sY, eX, eY);
	gradient.addColorStop(0,colS);
	gradient.addColorStop(1,colE);
	drawingContext.fillStyle = gradient;
}

function drawCross(cx, cy, w){
	line(cx - w, cy + w, cx + w, cy - w); //descending line
	line(cx - w, cy - w, cx + w, cy + w); //ascending line
}

if(typeof window !== 'undefined') window.Mica = Mica; // export for window
module.exports = Mica; // and export for module

},{}],2:[function(require,module,exports){
// Maths
const Mica = require('./js/Mica.js');

const modules = {
  Mica
}

if(typeof window !== 'undefined') window.base = modules; // would change Q to the name of the library
else module.exports = modules; // in node would create a context

},{"./js/Mica.js":1}]},{},[2]);
