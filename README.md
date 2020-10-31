
# A front-end practical session with Angular and Interacto

## First step: installation

- Clone the project

- Run `npm install` in the project folder to install the dependencies

- Open the project with your IDE (eg Webstorm) to run the app (`Angular CLI Server`).
You can run the app in command line using `ng serve`

- Open the documentation I provided on Angular (cf Moodle)

## Show text

- Open `c1.component.ts` and `c1.component.css` (I created this component using the command `ng generate component component/c1`).

- Note that a service `DataService` is injected through the constructor of `C1Component`. This service is located in `service/data.service.ts`.
I generated it using the command ` ng generate service service/data`.

- Using data binding, bind the `text` property of the `DataService` instance to the `TextArea` widget (do that in the HTML file).


## Clear text (not undoable) 

Now we want to clear the text of this `TextArea` widget by clicking on a button.
We will do that using two techniques.

Before starting, note that:
- The TypeScript convention wants you to access a class attribute using `this.`
- An `b1: ElementRef<HTMLButtonElement>` object is not a button but a reference to a button. To access the button: `b1.nativeElement`

<br/>

- **Using the Web native API** by clicking on the button `Clear text #1`. See: 
You need to:
    - add an identifier to the concerned button (`#b1`)
    - add an attribute in the component class to refer to this identifier (slide 35, use the `ElementRef` attribute, not the `QueryList` one)
    - in the component method `ngAfterViewInit`, add to `b1` an event handler to process each button click. See the example at the bottom of the following page:
    https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event
    - set the text of `DataService` to '' in this handler (`this.dataService.text = '';`)
    
  <br/>  

- **Using the Angular native API** by clicking on the button `Clear text #2`. See: https://angular.io/guide/user-input
You need to:
    - use the `(click)` directive
    - define a method in the component that will be called on each button click
    - set the text of `DataService` to '' in this method

<br/>

- **Using the Interacto library** by clicking on the button `Clear text #3`. See: https://interacto.github.io/
You need to: 
    - add an identifier to the concerned button (`#b3`)
    - add an attribute in the component class to refer to this identifier (slide 35)
    - write in the component method `ngAfterViewInit` an Interacto button binder. 
    On: https://interacto.github.io/ click on the `How to start` button to have an example. 
    You have to use the `buttonPress()` binder (the `Interactions`).
    <br/>
    This binder can use the predefined `AnonCmd` to set the text of `DataService` to ''.
    On the Interacto web page, click on the button `Commands/Undo` and scroll down to access the *Anonymous command* example. 



## Clear text (undoable) 

Now we want this action to be undoable:
when one clear the text and then clicks on the undo button, the text must reappear.
Then a click on the redo button must clear again the text. 

- For your Angular button, make this action undoable. I do not expect a beautiful and scalable undo/redo feature.
To remove from an array an element at a given index: `this.myarray.splice(index, 1);`.


- For your Interacto button, an Interacto binding can produce and manage undoable commands.
Look at this example *How to start* on : https://interacto.github.io/


## Long pressure (not undoable)

A long pressure (or long touch when using a touch device) consists in pressing a mouse button during a minimal duration.
After this duration an action is executed.
A mouse release before this delay does not permit the action execution.
We will work on a long pressure of 1 second.

- **Implement using the native Web API** (`addEventListener`) a long press interaction (1 second) on the button `Clear text #4` to clear the text data.
To write such a user interaction from scratch you have to use the `setTimeout` and `clearTimeout` functions.
For example: 

```ts
let timeout;
timeout = setTimeout(() => {
    console.log('foo');
}, 1000);
```

This code launches a timeout of 1000 ms. After this delay the anonymous function given as argument is executed.

Note that `setTimeout` returns an object.
You can use this timeout object to stop it using the `clearTimeout` function like this: `clearTimeout(timeout)`

Other elements to help in this exercise for processing mouse events:
if `'click'` refers to a mouse button click event, `'mousedown'` and `'mouseup'` respectively refer to a mouse button pressure and a mouse button release.

<br/>

- **Implement using Interacto** a long press interaction (1 second) on the button ``Clear text #5` to clear the text data.
