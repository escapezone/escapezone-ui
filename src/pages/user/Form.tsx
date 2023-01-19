import React, { ReactNode } from 'react';

import { useTheme, styled } from '@mui/material/styles';
import { Box, Button, Divider, Grid } from '@mui/material';

import MainCard from 'ui-component/cards/MainCard';

import kakao_login from 'assets/images/users/kakao_login.png';
import naver_login from 'assets/images/users/naver_login.png';

import logo from 'assets/images/logo.png';

import { kakaoLogin, kakaoRegister, naverLogin, naverRegister } from 'api/user';
import { aliveCheck } from 'api/aliveCheck';

const AuthWrapper = styled('div')(({ theme }) => ({
	backgroundColor: theme.palette.primary.light,
	minHeight: '100vh'
}));

type TForm = {
	children: ReactNode;
	type: 'login' | 'register';
};

type TUserWrapper = {
	children: ReactNode;
};

const UserWrapper = ({ children, ...other }: TUserWrapper) => (
	<MainCard
		title={''}
		sx={{ maxWidth: { xs: 600, lg: 475 }, margin: { xs: 2.5, md: 3 }, '& > *': { flexGrow: 1, flexBasis: '50%' } }}
		content={false}
		{...other}
	>
		<Box sx={{ p: { xs: 2, sm: 3, xl: 5 } }}>{children}</Box>
	</MainCard>
);

const Form = (props: TForm) => {
	const { children, type } = props;

	const theme = useTheme();

	const _handleAliveCheck = async () => {
		const result = await aliveCheck();
		console.log(result);
	};

	const _handleKakaoLogin = async () => {
		console.log('kakao');
		if (type === 'login') {
			const result = await kakaoLogin();
			console.log(result);
		} else {
			const result = await kakaoRegister();
			console.log(result);
		}
	};

	const _handleNaverLogin = async () => {
		console.log('naver');
		if (type === 'login') {
			const result = await naverLogin();
			console.log(result);
		} else {
			const result = await naverRegister();
			console.log(result);
		}
	};

	return (
		<AuthWrapper>
			<Grid container direction="column" justifyContent="flex-end" sx={{ minHeight: '100vh' }}>
				<Grid item xs={12}>
					<Grid container justifyContent="center" alignItems="center" sx={{ minHeight: 'calc(100vh - 20px)' }}>
						<Grid item sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
							<UserWrapper>
								<Grid container spacing={2} alignItems="center" justifyContent="center">
									<Grid item sx={{ mb: 3 }} alignItems="center" justifyContent="center">
										<Box sx={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
											<img src={logo} width={'35%'} onClick={_handleAliveCheck} />
										</Box>
									</Grid>
									<Grid item xs={12}>
										<Box sx={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
											<img src={kakao_login} width={'10%'} style={{ cursor: 'pointer' }} onClick={_handleKakaoLogin} />
											&nbsp;&nbsp;
											<img src={naver_login} width={'10%'} style={{ cursor: 'pointer' }} onClick={_handleNaverLogin} />
										</Box>
									</Grid>
									<Grid item xs={12}>
										<Box sx={{ alignItems: 'center', display: 'flex' }}>
											<Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
											<Button
												variant="outlined"
												sx={{
													cursor: 'unset',
													m: 2,
													py: 0.5,
													px: 7,
													borderColor: `${theme.palette.grey[100]} !important`,
													color: `${theme.palette.grey[900]}!important`,
													fontWeight: 500,
													borderRadius: '12px'
												}}
												disableRipple
												disabled
											>
												OR
											</Button>
											<Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
										</Box>
									</Grid>
									{children}
								</Grid>
							</UserWrapper>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</AuthWrapper>
	);
};

export default Form;
