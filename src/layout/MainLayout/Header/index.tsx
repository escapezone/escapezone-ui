import React from 'react';
import { Link } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, ButtonBase } from '@mui/material';

// project imports
import Search from './Search';
import ProfileSection from './ProfileSection';
import NotificationSection from './NotificationSection';

import logo from 'assets/images/logo.png';

// project imports
import config from 'config';

const Header = () => {
	const theme = useTheme();

	return (
		<>
			<Box sx={{ width: 228, display: 'flex', [theme.breakpoints.down('md')]: { width: 'auto' } }}>
				<Box component="span" sx={{ display: { xs: 'none', md: 'block' }, flexGrow: 1 }}>
					<ButtonBase disableRipple component={Link} to={config.defaultPath}>
						<Box component="span" sx={{ display: { xs: 'none', md: 'block', width: 190 }, flexGrow: 1 }}>
							<img src={logo} width={'80%'} />
						</Box>
					</ButtonBase>
				</Box>
			</Box>
			<Search />

			{/* <NotificationSection /> */}
			{/* <ProfileSection /> */}
		</>
	);
};

export default Header;
