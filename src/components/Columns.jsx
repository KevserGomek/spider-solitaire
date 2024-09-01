import React, {useEffect, useState} from 'react';
import Card from './Card';

const Columns = ({columnsData}) => {

    console.log('Columns data:', columnsData);
    

    return (
        <>
            <div className='flex flex-row items-start justify-between w-full'>
                {columnsData.map((column, columnIndex) => (
                    <div className='flex flex-col items-center bg-blue-100 relative md:w-24 md:h-96 sm:w-12' key={columnIndex}>
                        {column.map((card, cardIndex) => (
                            <Card
                                key={cardIndex}
                                suit={card.suit}
                                value={card.value}
                                isFaceUp={card.isFaceUp}
                                index={cardIndex}
                            />
                        ))}
                    </div>
                ))}
            </div>








        </>

    )
};

export default Columns;