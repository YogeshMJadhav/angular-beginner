import { Component } from '@angular/core';

@Component({
   selector:'test-component',
   // templateUrl:'./testComponent.html' 
   template:`<div> 
                  <p> This is the template paragraph </p>
                  <h3>Demo template</h3>
            </div>`
})

export class testcomponent{

   title = 'Trush';

}