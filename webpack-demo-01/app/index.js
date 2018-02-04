// import { myComponent, MyComponent } from './component';
// import React from 'react';

import { Button } from './button';
import { Clock } from './clock';
// import { WikiService } from './wiki.service';
// import { FlickrComponent } from './flickr.component';
// import { WikiComponent } from './wiki.component';

// ES6 Clock Demo
let container = document.createElement('div');
container.className = 'container';
document.body.appendChild(container);

let row1 = document.createElement('h1');
row1.innerText = 'ES6 Clock Demo';
row1.className = 'row jumbotron';
container.appendChild(row1);

let row2 = document.createElement('div');
row2.className = 'row';
container.appendChild(row2);

let clockElem = document.createElement('div');
clockElem.className = 'well well-lg col-xs-12 col-sm-10 col-md-8 col-lg-6';
row2.appendChild(clockElem);

let clock = new Clock(clockElem);
clock.start();


//ES6 Button Demo
let row3 = document.createElement('div');
row3.className = 'row btn-toolbar';
container.appendChild(row3);

let startButton, stopButton;
startButton = new Button('Start Clock', () => {
    clock.start();
    startButton.disable();
    stopButton.enable();
});
row3.appendChild(startButton.getElement());

stopButton = new Button('Stop Clock', () => {
    startButton.enable();
    stopButton.disable();
    clock.stop();
});
row3.appendChild(stopButton.getElement());

startButton.disable();
stopButton.enable();












// let myInstance =  new MyComponent("Hello ECMAScript 6 Wondeful World!");
// document.body.appendChild(myInstance.getElement());









console.log('Webpack demo 01 loaded successfully.');