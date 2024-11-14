import React from 'react';
import { Link } from 'react-router-dom'

const style = {
    width: "20rem",
}

const CharacterCard = ({ id, name, imageURL }) => {

    return (
        <>
            <div className="card me-3 p-0 bg-dark" style={style}>
                <img
                    src={`${imageURL}/${id}.jpg`}
                    className="card-img-top border" alt="..."
                />
                <div className="card-body text-center">
                    <h5 className="card-title my-2 text-light">{name}</h5>

                    <Link to={`/character_details/${id}`}>
                        <button className='btn btn-primary mt-2'
                        // onClick={() => { actions.getSingleCharacter(id) }}
                        >More Info</button>
                    </Link>

                </div>
            </div>
        </>
    );
}

export default CharacterCard;
