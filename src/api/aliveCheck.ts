import config from 'config';

export const aliveCheck = async () => {
	try {
		const ALIVE_CHECK = `${config.apiUrl + '/alive'}`;
		return await fetch(ALIVE_CHECK, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': 'http://local.escapezone.com:3000'
			}
		}).then((res) => res.json());
	} catch (error) {
		console.error('ALVIE CHECK ERROR : ', error);
	}
};
