import { IconDashboard, IconHome2 } from '@tabler/icons-react';

const dashboard = {
	id: 'dashboard',
	title: 'Dashboard',
	type: 'group',
	children: [
		{
			id: 'default',
			title: 'Dashboard',
			type: 'item',
			url: '/dashboard',
			icon: IconDashboard,
			breadcrumbs: false
		},
		{
			id: 'main',
			title: 'Main',
			type: 'item',
			url: '/main',
			icon: IconHome2,
			breadcrumbs: false
		}
	]
};

export default dashboard;
