
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

- **Using the Web native API** by clicking on the button 'Clear text (v1)'. See: 
You need to:
    - add an identifier to the concerned button (`#b1`)
    - add an attribute in the component class to refer to this identifier (slide 35, use the `ElementRef` attribute, not the `QueryList` one)
    - in the component method `ngAfterViewInit`, add to `b1` an event handler to process each button click. See the example at the bottom of the following page:
    https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event
    
    

- **Using the Angular native API** by clicking on the button 'Clear text (v2)'. See: https://angular.io/guide/user-input
You need to:
    - use the `(click)` directive
    - define a method in the component that will be called on each button click
    - set the text of the `TextArea` to '' ()



- **Using the Interacto library** by clicking on the button 'Clear text (v3)'. See: https://interacto.github.io/
You need to: 
    - add an identifier to the concerned button (`#b2`)
    - add an attribute in the component class to refer to this identifier (slide 35)
    - write in the component method `ngAfterViewInit` an Interacto button binder. See:
    This binder can use the predefined `AnonCmd`.

## Clear text (undoable) 


