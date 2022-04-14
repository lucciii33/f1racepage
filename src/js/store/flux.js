const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			RaceSchedule:[]
			
		},
		actions: {
			getF1Data: () => {
				fetch("https://ergast.com/api/f1/current.json", {
				})
					.then(response => {
						return response.json();
					})
					.then(data => {
						console.log(data)
						return setStore({ RaceSchedule: data })
					})
					.catch(err => {
						console.error(err);
					});
			},
		}
	};
};

export default getState;
