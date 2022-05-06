const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			RaceSchedule:[],
			shop:[],
			carShop: []
			
		},
		actions: {
			// getF1Data: () => {
			// 	fetch("https://ergast.com/api/f1/current.json", {
			// 	})
			// 		.then(response => {
			// 			return response.json();
			// 		})
			// 		.then(data => {
			// 			console.log(data.MRData.RaceTable.Races)
			// 			return setStore({ RaceSchedule: data.MRData.RaceTable.Races })
			// 		})
			// 		.catch(err => {
			// 			console.error(err);
			// 		});
			// },
			getShopData: () => {
				fetch("https://3000-lucciii33-f1pageraceback-hfcp0h4mufo.ws-us44.gitpod.io/product", {
				})
					.then(response => {
						return response.json();
					})
					.then(data => {
						console.log(data)
						return setStore({ shop: data })
					})
					.catch(err => {
						console.error(err);
					});
			},

			addCarShop: (fav)=>{
				let favorites = getStore().carShop;
				console.log(favorites)
        const found = favorites.find((item) => item == fav);
        if (found) {
          favorites = favorites.filter((element) => element !== fav);
        } else {
          favorites.push(fav);
        }
        // reset the global store
        setStore({ carShop: favorites });
			}
		},
		deleteFav: (fav) => {
			var deleteFavo = getStore().carShop;
			let delet = deleteFavo.filter((element) => element !== fav)
			setStore({ carShop: delet });
		},
	};
};

export default getState;
