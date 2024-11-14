import React,{useContext} from "react";
import "../../styles/home.css";
import CardList from "./CardList.jsx";
import { Context } from "../store/appContext.js";



let characterBaseURL = "https://starwars-visualguide.com/assets/img/characters";
let planetsBaseURL = "https://starwars-visualguide.com/assets/img/planets";
let vehiclesBaseURL = "https://starwars-visualguide.com/assets/img/vehicles";


export const Home = () => {
    const {store,actions} = useContext(Context);
	
    return(
        <>
		<div className="row">
			<div className="col-1"></div>
			<div className="col-10">
				<div className="my-5">
					<h1>Characters</h1>
					<CardList 
						array={store.allCharacters} 
						imageURL={characterBaseURL}
					/>
				</div>
				<div className="my-5">
					<h1>Planets</h1>
					<CardList 
						array={store.allPlanets} 
						imageURL={planetsBaseURL}
					/>
				</div>
				<div className="my-5">
					<h1>Vehicles</h1>
					<CardList 
						array={store.allVehicles} 
						imageURL={vehiclesBaseURL}	
					/>
				</div>
			</div>
			<div className="col-1"></div>
		</div>
	</>
    )

};