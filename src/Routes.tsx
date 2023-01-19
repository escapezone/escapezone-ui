import React, { LazyExoticComponent, Suspense, lazy } from 'react';

import { useRoutes } from 'react-router-dom';

import MainLayout from 'layout/MainLayout';
import MinimalLayout from 'layout/MinimalLayout';

import LinearProgress from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';

// styles
const LoaderWrapper = styled('div')({ position: 'fixed', top: 0, left: 0, zIndex: 1301, width: '100%' });

const Loader = () => (
	<LoaderWrapper>
		<LinearProgress color="primary" />
	</LoaderWrapper>
);

const Loadable = (Component: LazyExoticComponent<any>) => (props: any) =>
	(
		<Suspense fallback={<Loader />}>
			<Component {...props} />
		</Suspense>
	);

const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

const Login = Loadable(lazy(() => import('pages/user/Login')));
const Register = Loadable(lazy(() => import('pages/user/Register')));

const AuthenticationRoutes = {
	path: '/',
	element: <MinimalLayout />,
	children: [
		{
			path: '/login',
			element: <Login />
		},
		{
			path: '/register',
			element: <Register />
		}
	]
};

const MainRoutes = {
	path: '/',
	element: <MainLayout />,
	children: [
		{
			path: '/',
			element: <DashboardDefault />
		},
		{
			path: 'dashboard',
			children: [{ path: '', element: <DashboardDefault /> }]
		},
		{
			path: 'utils',
			children: [{ path: 'util-typography', element: <UtilsTypography /> }]
		},
		{
			path: 'utils',
			children: [{ path: 'util-color', element: <UtilsColor /> }]
		},
		{
			path: 'utils',
			children: [{ path: 'util-shadow', element: <UtilsShadow /> }]
		},
		{
			path: 'icons',
			children: [{ path: 'tabler-icons', element: <UtilsTablerIcons /> }]
		},
		{
			path: 'icons',
			children: [{ path: 'material-icons', element: <UtilsMaterialIcons /> }]
		},
		{ path: 'sample-page', element: <SamplePage /> }
	]
};

export default function ThemeRoutes() {
	return useRoutes([MainRoutes, AuthenticationRoutes]);
}
