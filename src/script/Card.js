export class Card {
    constructor(title="",type=0,val=0,flavor=``,art="") {
        const types = ["air", "earth", "fire", "water"];

        this.title = title;
        this.type = ((type > -1 && type < types.length) ? 
                        types[type] : types[0]);
        this.val = (val > -1 && val < 16) ? val : 0;
        this.flavor = flavor;
        this.art = art; // TODO: Placeholder art
    }

    // Getter
    get card() {
        return [
            this.title, 
            this.type, 
            this.val, 
            this.flavor, 
            this.art
        ];
    }
}

/* 
    Card
    types   :   Array of strings
    /////////////////////////////
    title   :   Some string
    type    :   String from types
    val     :   Num from 0-15
    flavor  :   Some long string
    art     :   Some string (path to img)
*/