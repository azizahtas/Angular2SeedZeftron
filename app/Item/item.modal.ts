export class Item {
    _id : string;
    Name : string;
    Size : string;
    Pieces : number;
    Company : string;
    Sub : string;
    Type : string;
    TQty : number;
    Max : number;
    Min : number;
    Avg : number;
    DPL : string;
    AP : string;
    Rate : number;
    Loc : Loc[];

    constructor(){
        this.Name = "";
        this.Type = "Enamel";
        this.DPL = "";
        this.AP = "";
        this.Loc = [];
    }
    initialize(item:Item){
        this._id = item._id;
        this.Name = item.Name;
        this.Size = item.Size;
        this.Pieces = item.Pieces;
        this.Company = item.Company;
        this.Sub = item.Sub;
        this.Type = item.Type;
        this.TQty = item.TQty;
        this.Max = item.Max;
        this.Min = item.Min;
        this.Avg = item.Avg;
        this.DPL = item.DPL;
        this.AP = item.AP;
        this.Rate = item.Rate;
        this.Loc = [];
    }
}

export class Loc {
    LocId : string;
    Qty : number;
}

export class SearchModal{
    Name : string;
    Company : string;
    Sub : string;
    Type : string;
    Size : string;
    LTER : number;
    GTEQ : number;

    constructor(){
        this.Name ="";
        this.Company ="";
        this.Sub ="";
        this.Type ="";
        this.Size ="";
    }
}
