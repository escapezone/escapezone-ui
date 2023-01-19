import React from 'react';

import { observer } from 'mobx-react-lite';

import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

// routing
import Routes from './Routes';

// defaultTheme
import themes from 'themes';

// project imports
import NavigationScroll from 'layout/NavigationScroll';

import useStore from 'store/index';

const App = () => {
	const { customizeStore } = useStore();

	return (
		<StyledEngineProvider injectFirst>
			<ThemeProvider theme={themes(customizeStore)}>
				<CssBaseline />
				<NavigationScroll>
					<Routes />
				</NavigationScroll>
			</ThemeProvider>
		</StyledEngineProvider>
	);
};

export default observer(App);
