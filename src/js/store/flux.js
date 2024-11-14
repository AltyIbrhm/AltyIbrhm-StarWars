let baseUrl = "https://www.swapi.tech/api/"
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			allCharacters:[],
			allPlanets:[],
			allVehicles:[],
			singleCharacter:[],			
			singlePlanet:[],			
			singleVehicle:[]			
		},
		actions: {

			loadStarWars :() =>{
					getActions().getAllCharacters()
					getActions().getAllVehicles()
					getActions().getAllPlanets()
			},
			getAllCharacters : () =>{
				fetch(`${baseUrl}/people`)
				.then(response =>{
					if(!response.ok){
						throw Error("Error retrieving info!")
					}
					return response.json();
				})
				.then(data =>{
					// console.log(data.results)
					setStore({allCharacters : data.results})
				})
				.catch(error => console.log("Error : ",error))

			},
			getAllPlanets : () => {
				fetch(`${baseUrl}/planets`)
				.then(response =>{
					if(!response.ok){
						throw Error("Error retrieving info!")
					}
					return response.json();
				})
				.then(data =>{
					// console.log(data.results)
					setStore({allPlanets : data.results})
				})
				.catch(error => console.log("Error : ",error))
			},
			getAllVehicles : () =>{
				fetch(`${baseUrl}/vehicles`)
				.then(response =>{
					if(!response.ok){
						throw Error("Error retrieving info!")
					}
					return response.json();
				})
				.then(data =>{
					// console.log(data.results)
					setStore({allVehicles : data.results})
				})
				.catch(error => console.log("Error : ",error))
			},

			getSingleCharacter : characterId => {
				fetch(`${baseUrl}/people/${characterId}`)
				.then(response =>{
					if(!response.ok){
						throw Error("Error retrieving info!")
					}
					return response.json();
				})
				.then(data =>{
					// console.log(data.result.properties)
					 setStore({singleCharacter : data.result.properties})
				})
				.catch(error => console.log("Error : ",error))
			},
			getSinglePlanet : () => {},
			getSingleVehicle : () => {},
		}
	};
};

export default getState;