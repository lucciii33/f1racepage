const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			RaceSchedule:[],
			shop:[],
			carShop: [],
			driverResult: [],
			
		},
		actions: {
			getF1Data: () => {
				fetch("https://ergast.com/api/f1/current.json", {
				})
					.then(response => {
						return response.json();
					})
					.then(data => {
						console.log(data.MRData.RaceTable.Races)
						return setStore({ RaceSchedule: data.MRData.RaceTable.Races})
					})
					.catch(err => {
						console.error(err);
					});
			},
			getF1Drivers: () => {
				fetch("https://ergast.com/api/f1/current/last/results.json", {
				})
					.then(response => {
						return response.json();
					})
					.then(data => {
						console.log(data.MRData.RaceTable.Races[0].Results)
						return setStore({ driverResult: data.MRData.RaceTable.Races[0].Results})
					})
					.catch(err => {
						console.error(err);
					});
			},
			
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

			addCarShop: (user_id,product_id)=>{
		// 		let favorites = getStore().carShop;
		// 		console.log(favorites)
        // const found = favorites.find((item) => item == fav);
        // if (found) {
        //   favorites = favorites.filter((element) => element !== fav);
        // } else {
        //   favorites.push(fav);
        // }
        // // reset the global store
        // setStore({ carShop: favorites });
		// 	}

		let storeCartShop = getStore().carShop;
        const found = storeCartShop.find(
          (item) => item.id == product_id
        );
        if (found) {
          alert("That product exist");
        } else {
        //   let favoriteString = favorites.toString();
          fetch("https://3000-lucciii33-f1pageraceback-hfcp0h4mufo.ws-us44.gitpod.io/product", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
				user_id:  user_id,
				product_id: product_id,
            }),
          })
            .then((response) => response.json())
            .then((data) => setStore({ carShop: data }))
            .catch((err) => console.log(err));
        }
		},
		deleteFav: (fav) => {
			var deleteFavo = getStore().carShop;
			let delet = deleteFavo.filter((element) => element !== fav)
			setStore({ carShop: delet });
		},
	}};
};

export default getState;
