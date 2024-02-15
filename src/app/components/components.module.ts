import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListComponent } from './list/list.component';
import { CardComponent } from './card/card.component';


@NgModule({
    imports:[CommonModule],
    exports: [ListComponent],
    declarations: [
        ListComponent,
        CardComponent
    ],
    providers: [],
})
export class ComponentsModule { }
