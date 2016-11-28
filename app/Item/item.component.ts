import { Component } from '@angular/core';
import {Item, SearchModal, Loc} from "./item.modal";
import {ItemService} from "./item.service";
import * as _ from "lodash";


@Component({
    templateUrl: 'app/Item/item.component.html',
    styles :[`
        .list-group-item{
        background-color: #334559;
        color: whitesmoke;
        font-size: 20px;
        }
`]
})
export class ItemComponent{}