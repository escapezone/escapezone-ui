import '../styles/globals.css';

import 'assets/scss/style.scss';

// defaultTheme
import themes from 'themes';

// project imports
import NavigationScroll from 'layout/NavigationScroll';

import useStore from 'store/index';

import { observer } from 'mobx-react-lite';

import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

function MyApp({ Component, pageProps }) {
	const { customizeStore } = useStore();

	return (
		<StyledEngineProvider injectFirst>
			<ThemeProvider theme={themes(customizeStore)}>
				<CssBaseline />
				<NavigationScroll>
					<Component {...pageProps} />
				</NavigationScroll>
			</ThemeProvider>
		</StyledEngineProvider>
	);
}

export default observer(MyApp);
