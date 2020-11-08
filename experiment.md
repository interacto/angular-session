
# Practical Session #2

This session focuses on the page http://localhost:4200/tp2

The code to edit is located in `src/app/component/tp2`.

This session contains of three exercises.
You have to do them using either the Web/Angular API **or** Interacto.
Ask your instructor to be sure.
Several questions may compose each exercise.
You can modify `ts`, `html`, or `css` files of the component `tp2`.
You can also modify `data.service.ts`.
There is no need to write tests.

As a reminder, in Angular you can create new class using this command: 
`ng generate class classname`


## Triple click to change a color

A triple-click on the div tag `triple` must change the color contained in `dataService` to a random color value.
The background color of this `triple` div tag uses `dataService.color` so that you should be able to see the change.

The class `DataService` already provides a method `setNewRandomColor` to set its `color` attribute with a new random value.

**Question 1** Implement this feature without considering undo/redo.
Commit your code to keep the changes in this history.

- Note for those who have to use the Web/Angular API: a mouse event has an attribute `detail` that refers to the number of clicks.
- Note for those who have to use Interacto: `clicksBinder()` may help you.


**Question 2** Adapt your code to be able to undo/redo color changes. 
Commit your code to keep the changes in this history.

<br/>

## Write text

Editing the text of the `textarea` HTML element must change `dataService.text`.

A precision: do this action when the textarea is idle for 1 second.
For example: the user writes a sequence of words and then stops for more than 1 second, so that `dataService.text` is updated.

This is a mainstream optimisation that implement in many coding or text processing tools to limit the number of editing actions. 

**Question 1** Implement this feature without considering undo/redo.
Commit your code to keep the changes in this history.


<br/>

## Drag-and-drop a shape

The last exercise consists in moving a rectangle using a drag-and-drop interaction:
Press on the rectangle, drag it to a location, and release it to end its translation. 

The rectangle to move is the rectangle `rec` defined in the HTML file.

**Question 1** Implement this feature without considering undo/redo.
Commit your code to keep the changes in this history.

- Note for those who have to use the Web/Angular API: you can use https://v7.material.angular.io/cdk/drag-drop/overview#getting-started
or use the classical `mousedown`, `mouseup`, `mousemove` event listeners.
- Note for those who have to use Interacto: `dndBinder(true)` may help you. The x/y coordinates of the rectangle 
are defined by `dataService.position`. 


**Question 2** Adapt your code to be able to undo/redo the moves. 
Commit your code to keep the changes in this history.
