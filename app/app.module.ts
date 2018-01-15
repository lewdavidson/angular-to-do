import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

//ngmodule = imports general module code from angular
//browsermodule = imports code to run app in browser, including "directives" that allow use of conditionals and loops.
//appcomponent = refers to exported appcomponent in the root component file

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
//imports = an array of other modules anc content the module requires. Differs from import statements at the top: top imports functionality and this local import specifically pulls in pieces of our app we want to include in this specific module.

//declarations = array of all components that will reside in this module.

//bootstrap = "bootstraping" means to run and app with only minimum possible resources. So here it is an array of components required immedeatley upon launching the app. We will use our root AppComponent right on the index so it must be available on load.

export class AppModule { } 
