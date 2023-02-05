import config from 'config';

import { KAKAO_REST_KEY } from 'constants/sns';

export const kakaoLogin = async () => {
	try {
		const _redirectUri = `${config.baseUrl}/`;
		const _url = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${KAKAO_REST_KEY}&redirect_uri=${_redirectUri}&prompt=none`;
		return await fetch(_url).then((res) => res.json());
	} catch (error) {
		console.error('KAKAO LOGIN ERROR : ', error);
	}
};

export const naverLogin = async () => {
	try {
		const _url = ``;
	} catch (error) {
		console.error('NAVER LOGIN ERROR : ', error);
	}
};

export const kakaoRegister = async () => {
	try {
		const _redirectUri = `${config.baseUrl}/user/register`;
		const _url = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${KAKAO_REST_KEY}&redirect_uri=${_redirectUri}`;
		return await fetch(_url).then((res) => res.json());
	} catch (error) {
		console.error('KAKAO REGISTER ERROR : ', error);
	}
};

export const naverRegister = async () => {
	try {
		const _url = ``;
	} catch (error) {
		console.error('NAVER REGISTER ERROR : ', error);
	}
};
