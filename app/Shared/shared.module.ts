import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
    imports : [CommonModule,FormsModule,ReactiveFormsModule], // Your Module Imports Go Here
    declarations : [], //Your Components go here
    providers : [], //Your Services Go Here
    exports : [CommonModule,FormsModule,ReactiveFormsModule] // your Exports Go here
})
export class SharedModule{

}