import React, { useState, useEffect } from 'react';
import createDeck from '../utils/deckUtils';
import shuffle from '../utils/shuffle';
import initializeColumns from '../utils/initializeColumns';
import Columns from '../components/Columns'

const GameScreen = () => {
    const [columnsData, setColumnsData] = useState([]);


    useEffect(() => {
        const deck = createDeck();
        shuffle(deck);
        const data = initializeColumns(deck);
        setColumnsData(data);
    }, []);
    return (
        <>
           

            <div className='bg-yellow-300 w-screen h-screen '>
                <div className='bg-red-300 w-screen h-1/6'>menü pause seçenekleri</div>
                <div className='bg-blue-100 flex justify-center h-4/6 '>
                    <div className='bg-green-100 w-11/12 flex justify-center'>
                        <Columns columnsData={columnsData} />
                    </div>




                </div>









                <div className='bg-red-300 w-screen h-1/6'>biten deste oluşan desteler</div>



            </div>






        </>

    )
};

export default GameScreen;