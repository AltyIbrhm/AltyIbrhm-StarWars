import React from 'react';
import CharacterCard from './CharacterCard.jsx';

const CardList = ({ array, imageURL }) => {
    return (
        <>
            <div className="row d-flex flex-nowrap overflow-auto">
                {
                    array.map(item => {
                        return (
                            <CharacterCard
                                key={item.uid}
                                id={item.uid}
                                name={item.name}
                                imageURL={imageURL}
                            />
                        );
                    })
                }
            </div>
        </>
    );
}

export default CardList;