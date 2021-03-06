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
				fetch("https://3000-lucciii33-f1pageraceback-hfcp0h4mufo.ws-us54.gitpod.io/product", {
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

			addCarShop: (price, description, image, product_id, user_id)=>{
		let storeCartShop = getStore().carShop;
        const found = storeCartShop.find(
          (item) => item.id == product_id
        );
        if (found) {
          alert("That item is on the cart already!!");
        } else {
        //   let favoriteString = favorites.toString();
          fetch("https://3000-lucciii33-f1pageraceback-hfcp0h4mufo.ws-us54.gitpod.io/favorite", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
				price,
				description,
				image,
				product_id,
				user_id
            }),
          })
            .then((response) => response.json())
            .then((data) =>{
				if(data.message){
					alert(data.message)
			}else{
				data.price = price
				setStore({ carShop: data })
			}

			} )

            .catch((err) => console.log(err));
        }
		},

		getCarShop: ()=> {
			fetch("https://3000-lucciii33-f1pageraceback-hfcp0h4mufo.ws-us54.gitpod.io/favorite", {
				method: "GET",
				headers: {
				  "Content-Type": "application/json",
				},
			  })
				.then((response) => response.json())
				.then((data) =>{
					console.log(data)
					setStore({ carShop: data })
				} )
				.catch((err) => console.log(err));
			},
			deleteCarShop: (id) => {
				const store = getStore()
				fetch("https://3000-lucciii33-f1pageraceback-hfcp0h4mufo.ws-us54.gitpod.io/favorite/" + id, {
				  method: "DELETE",
				  headers: {
					"Content-Type": "application/json",
				  },
				})
				  .then((response) => response.json())
				  .then((data) => setStore({ carShop: data }))
				  .catch((err) => console.log(err));
			  },

			  updateCarShop: (id, quantity )=>{
				  const store = getStore()
				fetch(`https://3000-lucciii33-f1pageraceback-hfcp0h4mufo.ws-us54.gitpod.io/favorite/${id}`, {
					method: "PUT",
					headers: {
					  "Content-Type": "application/json",
					},
					body: JSON.stringify({
						quantity: quantity+1,
					}),
				  })
					.then((response) => response.json())
					.then((data) =>{
						let newFavorites = store.carShop.map((item)=>{

							if(item.product_id == data.product_id){
								item["quantity"]=data["quantity"]
							}
							return item 
						})
						// newFavorites = [...newFavorites, data]
						setStore({carShop: newFavorites})

					} )
					.catch((err) => console.log(err));
				},

				updateCarShopless: (id, quantity )=>{
					const store = getStore()
				  fetch(`https://3000-lucciii33-f1pageraceback-hfcp0h4mufo.ws-us54.gitpod.io/favorite/${id}`, {
					  method: "PUT",
					  headers: {
						"Content-Type": "application/json",
					  },
					  body: JSON.stringify({
						  quantity: quantity-1,
					  }),
					})
					  .then((response) => response.json())
					  .then((data) =>{
						  let newFavorites = store.carShop.map((item)=>{
  
							  if(item.product_id == data.product_id){
								  item["quantity"]=data["quantity"]
							  }
							  return item 
						  })
						  // newFavorites = [...newFavorites, data]
						  setStore({carShop: newFavorites})
					  } )
					  .catch((err) => console.log(err));
				  }
			  
	}};
};

export default getState;
