import React from 'react';

const Card = ({suit, value, isFaceUp}) => {



    const cardImage = isFaceUp
    ? `/assets/card-icons/${suit}/${value}.png` 
    : `/assets/card-icons/card-backgrounds/classic_blue.png`;     //şimdilik mavi sonra temalaştır




    return (
        <>
            <div className='bg-red-300'>
                <img src={cardImage}></img>

            </div>









        </>

    )
};

export default Card;