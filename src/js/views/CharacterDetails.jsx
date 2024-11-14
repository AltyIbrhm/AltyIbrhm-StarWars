import React, { useEffect, useContext, act } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
const style = {
    "maxWidth": "540px"
}
let characterBaseURL = "https://starwars-visualguide.com/assets/img/characters";

//fetch the unique character's information

const CharacterDetails = () => {

    const { store, actions } = useContext(Context)
    const params = useParams();
    useEffect(() => {
        actions.getSingleCharacter(params.id)
    }, [])
    return (
        <>
            <div className="card mb-3" style={style}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={`${characterBaseURL}/${params.id}.jpg`} className="img-fluid rounded-start" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{store.singleCharacter.name}</h5>
                            <p className="card-text">Birh Year : {store.singleCharacter.birth_year}</p>
                            <p className="card-text">Eye Color : {store.singleCharacter.eye_color} </p>
                            <p className="card-text">Hair Color : {store.singleCharacter.hair_color}</p>
                            <p className="card-text">Height : {store.singleCharacter.height} </p>
                            <p className="card-text">Mass : {store.singleCharacter.mass}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CharacterDetails;