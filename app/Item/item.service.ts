
import {Injectable} from "@angular/core";
import {Settings} from "../settings";
import "../rxjs.operators";
import {Http} from "@angular/http";
import {Item} from "./Item.modal";

@Injectable()
export class ItemService{
    constructor(private _http:Http){}
    private _baseUrl = "http://"+Settings.serverHost+":"+Settings.serverPort+"/api/Item";
    getAllItems(querry?){
        if(querry){

        }
        else{
            return this._http.get(this._baseUrl)
                .map(res => res.json());
        }
    }

    saveItem(Item:Item){
        return this._http.post(this._baseUrl,Item)
            .map(res => res.json())
    }

    editItem(Id:string,Item:Item){
        return this._http.put(this._baseUrl+"/"+Id,Item)
            .map(res => res.json())
    }

    deleteItem(Id:string){
        return this._http.delete(this._baseUrl+"/"+Id)
            .map(res => res.json())
    }
}