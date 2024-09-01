import createDeck from "./deckUtils";
import shuffle from "./shuffle";

const initializeColumns = () => {
    const deck = shuffle(createDeck());
    const columnsData = Array.from({ length: 10 }, () => []); 

   
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 6; j++) {
            const card = deck.pop();
            if (j === 5) {
                card.isFaceUp = true;
            }
            columnsData[i].push(card);
        }
    }

    for (let i = 4; i < 10; i++) {
        for (let j = 0; j < 5; j++) {
            const card = deck.pop();
            if (j === 4) {
                card.isFaceUp = true;
            }
            columnsData[i].push(card);
        }
    }

    return columnsData;
};

export default initializeColumns;