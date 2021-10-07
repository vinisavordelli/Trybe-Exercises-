# Trybe Exercises List and Checks

Compilation of Exercises ordered as follows: Module> Learning Blocks> lessons.

## Module 1: Foundations 

### [x] Block 1 - Unix & Bash

[x] - all lessons completed, wont commit to git or github as theyre basically shell lessons;

### Block 2 - Git, Github and Intenet 

#### [x] Lesson 1 - What is it and what does it do?

All Exercises Completed and Commited Learned to configure our git & github and some commands like :

```sh
git init
git commit -m "message"
git add "filename or ."
```

Also learned how git and gitHub works, what branches are, etc.

#### [x] Lesson 2 - Understanding the Commands

Learned some more commands like:

```sh
git clone "url"
git clone "local repository"
Git push 
git pull
git fetch
git branch "name of the branch"
git checout -b "name of the branch"
```


Also learned about pull requests, merges, gitignore, README good practices, etc.

Did some practice exercise with pulling requests and merging two branches into main. 



#### [x] Lesson 3 - Internet : How does it work

Learned about the history of the internet, what it actually is, how it works, what are the protocols, Dns, etc. 


### Block 3 - HTML & CSS Introduction

#### [x] Lesson 1 - Page Structures 

Learned Basic HTML Tags, built our portfolio on Github Pages and also did a exercise which should be inside today's directory.

So far so good. 

#### [x] Lesson 2 - CSS First Steps

Made some styling changes to my previous exercise. 

Did Some Basics on Css, like font formatting and color changing, didnt work with shadows, placement, etc. yet. 

Will be updating my portfolio as well

#### [x] Lesson 3 - Sessions and positioning

learned about blocks, margin, padding, positioning, etc

All Exercises completed

1 - Add padding, border and margin to elements
2 - Make Mario stomp Goomba and Bowser complain
3 - Make several styling changes 

#### [x] Lesson 4 - Semantics & Display

Learned more about proper semantics & display styles.

Completed two exercises:

1 - Change the looks of a webpage making it look like an img that was given
2 - Build a Webpage talking about the Mantis Shrimp with propper semantics

Both are completed, second exercise didnt receive any styling

### Block 4 - JavaScript Introduction

#### [x] Lesson 1 - First Steps

Learned about the history behind Javascript, primitive types, operators, if & else, switch & case & break, etc.

Did 10 Exercises of the content, check it out!

#### [x] Lesson 2 - Arrays, loof for, for/of;
Completed all exercises, and also and made a bubble sort using for.

#### [x] Lesson 3 - Algorithims and Logic

Made some exercises drawing patterns in javascript 

```javascript

let squareSize = 9;
let numberOfRows = squareSize - 2 ;

for(i = 0; i < numberOfRows; i++){
    let row = '';
    for(k = 0; k <= numberOfRows - (i+2); k++){
        row+=' ';
    }
    for(j = 0; j <= (2 *i) ; j++){
        
        row+='*';
}
console.log(row);
}
```

#### [x] Lesson 4 - Objects and Functions

Learned about objects functions and for in 

All Exercises Completed

### [x] Block 5 Javascript DOM, Events & Web Storage

#### [x] Lesson 1 DOM & Selectors

learned what DOM is and selectors like

```javascript

document.getElementById()
document.getElementByClass()
document.getElementByTagName()
document.querySelector()
document.querySelectorAll()
```
All Exercises completed

#### [x] Lesson 2 - Working with Elements;

learned how to work the elements i learned to select las lessson;
all exercises completed;

#### [x] Lesson 3 - Events

learned how to work with elements, specially how to work with :

```javascript 
addEventListener()
.event.target
```
all exercises completed;

### [x] Block 6 - HTML & CSS - Forms, FlexBox and Responsive style.

#### [x] Lesson 1 - Forms

Learned how to properly build a form and how to appropriately use some tags like :

```HTML

<label>
<button></button>
<input>
<form></form>

``` 
etc.

#### [x] Lesson 2 - Libraries and Frameworks

Learned what libraries and frameworks are and worked with some of them

#### [x] Lesson 3 & 4 - Flexbox

Learned the display: flex css property and how to work with it.

#### [x] Lesson 5 Responsive CSS - Mobile First

Had an introduction on how to work with reponsive css and built multiple pages with responsive styles.

### [x] Block 7 - Javascript ES6 Introduction & Unit Tests

#### [x] Lesson 1 - Let, const, arrow functions, template literals & ternary operator

Learned a lot of things that simplifies the way we do things, the proper usage of variables, how to use arrow functions for simpler functions as well as ternary operators when whe can work with 2 parameters. Also learned a simpler way to concatenate strings and javascript elements and variables through template literals.

#### [x] Lesson 2 

Learned to work with objects more objectively;

#### [x] Lesson 3 

Started my first steps with jest and its unitary tests;

### Block 8 Higher Order Functions

#### [x] Lesson 1 Intro;

Learned what they are and did some exercises using them.

#### [x] Lesson 2 - forEach, find, some, every, sort

Learned to work some Higher Order Functions to make our code more concise and clear. 

An excellent exercise with multiple steps to better understand the following array functions: 
```javascript 
array.forEach();
array.find();
array.some();
array.every();
array.sort();
```

#### [x] Lesson 3 - Map & Filter

Learned these two new functions:
```javascript
array.map();
array.filter();
``` 
Also did some exercises using the same array of books that we used yesterday.

#### [x] Lesson 4 - Reduce

Time to learn another High Order Function. Today it was ```array.reduce()```'s turn.