
# Practical Session #2: an experiment Web/Angular API / Interacto

Procedure:
- Answer in this file the two following questions:
    - What is, according to you, your expertise level in Angular, between 1 and 10 (1 lowest, 10 highest expertise):
    
    - What is, according to you, your expertise level in Web front-end, between 1 and 10 (1 lowest, 10 highest expertise):  

- you should know, from your supervisor, if you have to use either the Web/Angular API or Interacto to do the three following exercises

- clone the project

- run the Angular app (run `Angular CLI Server`).
This session focuses on the page http://localhost:4200/tp2

- Do the three exercises using either the Web/Angular API or Interacto.<br/>
Do not forget to commit locally your changes after each question (do not forget to add new files to git, if you created new files).
Several questions may compose each exercise.<br/>
The code to edit is located in `src/app/component/tp2`.
You can modify `ts`, `html`, or `css` files of this component.
You can also modify `src/app/service/data.service.ts`.
There is no need to write tests.<br/>
As a reminder, in Angular you can create new class using this command: 
`ng generate class classname`

- you have a delay for each exercise (written in each exercise).<br/>
Do not forgot to commit files even if the delay expired.<br/>
You can switch to the next exercise before the delay, but notify the supervisor.

- At the end of the session, delete the folder `node_modules`,  put a zipped file of the project folder on moodle: https://moodleng.insa-rennes.fr/mod/assign/view.php?id=18007 <br/>
Make sure the archive contains the hidden folder `.git`.


- You can ask the supervisor for clarifications



## #1 -- Triple click to change a color

A triple-click on the div element `triple` (located in the HTML file) must change the color contained in `dataService` to a random color value.
The background color of this `triple` div element uses `dataService.color` so that you should be able to see the change.

The class `DataService` already provides a method `setNewRandomColor` to set its `color` attribute with a new random value.

You have 30 minutes max for this exercise. 

**Question 1** Implement this feature without considering undo/redo.
Commit locally your code to keep the changes in this history with the message `1 q1` (do not forget to add new files to git, if you created new files).

- Note for those who have to use the Web/Angular API: a mouse event has an attribute `detail` that refers to the number of clicks.
- Note for those who have to use Interacto: `clicksBinder(nb)` refers to an N-click interaction.


**Question 2** Adapt your code to be able to undo/redo color changes. 
Commit locally your code to keep the changes in this history with the message `1 q2` (do not forget to add new files to git, if you created new files).

<br/>

## #2 -- Write text

Editing the text of the `textarea` HTML element must change `dataService.text`.

A precision: do this action when the textarea is idle for 1 second.
For example: the user writes a sequence of letters and then stops for more than 1 second, so that `dataService.text` is updated.

This is a mainstream optimisation that implement many code/text processing tools to limit the number of editing actions. 

You have 20 minutes max for this exercise. 

**Question 1** Implement this feature without considering undo/redo.
Commit locally your code to keep the changes in this history with the message `2 q1` (do not forget to add new files to git, if you created new files).


<br/>

## #3 -- Drag-and-drop a shape

The last exercise consists in moving a rectangle using a drag-and-drop interaction:
Press on the rectangle, drag it to a location, and release it to end its translation. 

The rectangle to move is the rectangle `rec` defined in the HTML file.

You have 35 minutes max for this exercise. 

**Question 1** Implement this feature without considering undo/redo.
Commit locally your code to keep the changes in this history with the message `3 q1` (do not forget to add new files to git, if you created new files).

- Note for those who have to use the Web/Angular API: you can use https://v7.material.angular.io/cdk/drag-drop/overview#getting-started
or use the classical `mousedown`, `mouseup`, `mousemove` event listeners.
- Note for those who have to use Interacto: `dndBinder(true)` may help you. The x/y coordinates of the rectangle 
are defined by `dataService.position`. 


**Question 2** Adapt your code to be able to undo/redo the moves. 
Commit locally your code to keep the changes in this history with the message `3 q2` (do not forget to add new files to git, if you created new files).
