import React, { useEffect, useRef, useState } from 'react';

import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';

import { IconMessageCircle, IconHome, IconSearch, IconDoor, IconUserCircle } from '@tabler/icons-react';

import Dashboard from 'views/dashboard/Default';
import SamplePage from 'views/sample-page';
import Typography from 'views/utilities/Typography';
import Color from 'views/utilities/Color';
import Shadow from 'views/utilities/Shadow';
import Chat from 'pages/chat';

const getPage = (tab: number) => {
	if (tab === 0) return <Dashboard />;
	if (tab === 1) return <Typography />;
	if (tab === 2) return <Color />;
	if (tab === 3) return <Chat />;
	if (tab === 4) return <SamplePage />;

	return null;
};

const Navigation = () => {
	const [tab, setTab] = useState(0); // 선택한 메뉴(탭)

	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		// (ref.current as HTMLDivElement).ownerDocument.body.scrollTop = 0;
		if (ref.current) ref.current.ownerDocument.body.scrollTop = 0;
	}, [tab]);

	return (
		<Box ref={ref}>
			<CssBaseline />
			{getPage(tab)}
			<Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
				<BottomNavigation
					showLabels
					value={tab}
					onChange={(event, newValue) => {
						setTab(newValue);
					}}
				>
					<BottomNavigationAction label="Search" icon={<IconSearch />} />
					<BottomNavigationAction label="Rooms" icon={<IconDoor />} />
					<BottomNavigationAction label="Home" icon={<IconHome />} />
					<BottomNavigationAction label="Chat" icon={<IconMessageCircle />} />
					<BottomNavigationAction label="Profile" icon={<IconUserCircle />} />
				</BottomNavigation>
			</Paper>
		</Box>
	);
};

export default Navigation;
