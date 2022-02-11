import Card from "./Card.js"

export class Deck {
    constructor(...cards) {
        this.deck = [];
        if ([...cards].length > 0) {
            for (let i = 0; i < [...cards].length; i++) {
                this.deck.push([...cards][i]);
            }
        }
    }

    // Methods
    shuffleDeck() {
        this.deck.sort(() => Math.random() - 0.5); // ty w3docs
    }

    sortDeck() {
        // TODO:
        //   Sort by:
        //     1. Type
        //     2. Value
        //     3. Name
    }

    drawCard() {
        return this.deck.shift();
    }

    returnCard(card) {
         this.deck.push(card);
    }
}