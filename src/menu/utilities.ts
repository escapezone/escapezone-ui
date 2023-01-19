// assets
import { IconTypography, IconPalette, IconShadow, IconWindmill, IconBrandChrome } from '@tabler/icons';

const utilities = {
	id: 'utilities',
	title: 'Utilities',
	caption: 'Utils here',
	type: 'group',
	children: [
		{
			id: 'util-typography',
			title: 'Typography',
			type: 'item',
			url: '/utils/util-typography',
			icon: IconTypography,
			breadcrumbs: false
		},
		{
			id: 'util-color',
			title: 'Color',
			type: 'item',
			url: '/utils/util-color',
			icon: IconPalette,
			breadcrumbs: false
		},
		{
			id: 'util-shadow',
			title: 'Shadow',
			type: 'item',
			url: '/utils/util-shadow',
			icon: IconShadow,
			breadcrumbs: false
		},
		{
			id: 'icons',
			title: 'Icons',
			type: 'collapse',
			icon: IconWindmill,
			children: [
				{
					id: 'tabler-icons',
					title: 'Tabler Icons',
					type: 'item',
					url: '/icons/tabler-icons',
					breadcrumbs: false
				},
				{
					id: 'material-icons',
					title: 'Material Icons',
					type: 'item',
					url: '/icons/material-icons',
					breadcrumbs: false
				}
			]
		},
		{
			id: 'sample-page',
			title: 'Sample Page',
			type: 'item',
			url: '/sample-page',
			icon: IconBrandChrome,
			breadcrumbs: false
		}
	]
};

export default utilities;
