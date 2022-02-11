export class Card {
    constructor(title=" ",type=" ",val=0,flavor=` `,art=" ") {
        this.title = title;
        this.type = type;
        this.val = val;
        this.flavor = flavor;
        this.art = art;
    }

    // Getter
    get card() {
        return [this.title,this.type,this.val,this.flavor,this.art];
    }
}