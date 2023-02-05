import React from 'react';
import { Outlet } from 'react-router-dom';

import { styled, useTheme } from '@mui/material/styles';
import { AppBar, Box, CssBaseline, Toolbar } from '@mui/material';
import Breadcrumbs from 'ui-component/extended/Breadcrumbs';

import Header from './Header';
import navigation from 'menu';

import { IconChevronRight } from '@tabler/icons-react';

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(({ theme }) => ({
	...theme.typography.mainContent,
	transition: theme.transitions.create('margin', {
		easing: theme.transitions.easing.easeOut,
		duration: theme.transitions.duration.enteringScreen
	}),
	marginBottom: '70px',
	marginTop: '86px',
	marginLeft: '10px',
	marginRight: '10px',
	padding: '10px',
	width: '100%'
}));

const MainLayout = () => {
	const theme = useTheme();

	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />
			<AppBar
				enableColorOnDark
				position="fixed"
				color="inherit"
				elevation={0}
				sx={{ bgcolor: theme.palette.background.default, transition: theme.transitions.create('width') }}
			>
				<Toolbar>
					<Header />
				</Toolbar>
			</AppBar>

			<Main theme={theme}>
				<Breadcrumbs separator={IconChevronRight} navigation={navigation} icon title rightAlign />
				<Outlet />
			</Main>
		</Box>
	);
};

export default MainLayout;
