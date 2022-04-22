const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			RaceSchedule:[],
			shop:[]
			
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
				fetch("https://3000-lucciii33-f1pageraceback-hfcp0h4mufo.ws-us41.gitpod.io/product", {
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
		}
	};
};

export default getState;
