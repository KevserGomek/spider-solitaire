const suits = ["clubs", "diamonds", "hearts", "spades"];
const values = Array.from({ length: 13 }, (_, i) => (i + 1).toString());

const createDeck = () => {
    const deck = [];

    suits.forEach((suit) => {
        values.forEach((value) => {
            deck.push({ suit, value, isFaceUp: false }); 
            deck.push({ suit, value, isFaceUp: false }); 
        });
    });

    return deck;
};

export default createDeck;