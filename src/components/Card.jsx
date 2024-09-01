import React from 'react';

const Card = ({suit, value, isFaceUp, index}) => {
    console.log('Card props:', { suit, value, isFaceUp, index })


    const cardImage = isFaceUp ? `src/assets/card-icons/${suit}/${value}.png` : `src/assets/card-icons/card-backgrounds/classic_blue.png`;     //şimdilik mavi sonra temalaştır




    return (
        <>
            <div className='bg-red-300 absolute h-36'
            style={{ top: `${index * 15}px`, left: '0' }}
            >
                <img src={cardImage} alt={`${value} of ${suit}`}></img>

            </div>









        </>

    )
};

export default Card;