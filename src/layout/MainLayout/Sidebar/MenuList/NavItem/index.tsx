import React, { forwardRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Avatar, Chip, ListItemButton, ListItemIcon, ListItemText, Typography, useMediaQuery } from '@mui/material';

// assets
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

import useStore from 'store/index';

type TNavItem = {
	item: {
		url: string;
		id: any;
		icon: any;
		target: any;
		external: any;
		chip: any;
		item: any;
		disabled: boolean;
		title: string;
		caption: any;
	};
	level: number;
};

const NavItem = ({ item, level }: TNavItem) => {
	const { customizeStore } = useStore();

	const theme = useTheme();

	const matchesSM = useMediaQuery(theme.breakpoints.down('lg'));

	const Icon = item.icon;
	const itemIcon = item?.icon ? (
		<Icon stroke={1.5} size="1.3rem" />
	) : (
		<FiberManualRecordIcon
			sx={{
				width: customizeStore.isOpen.findIndex((id) => id === item?.id) > -1 ? 8 : 6,
				height: customizeStore.isOpen.findIndex((id) => id === item?.id) > -1 ? 8 : 6
			}}
			fontSize={level > 0 ? 'inherit' : 'medium'}
		/>
	);

	let itemTarget = '_self';
	if (item.target) {
		itemTarget = '_blank';
	}

	let listItemProps = {
		component: forwardRef((props, ref) => <Link ref={ref} {...props} to={item.url} target={itemTarget} />)
	};
	if (item?.external) {
		listItemProps = { component: 'a', href: item.url, target: itemTarget };
	}

	const itemHandler = (id) => {
		customizeStore.onChangeIsOpen(id);
		if (matchesSM) customizeStore.onChangeOpened(false);
	};

	// active menu item on page load
	useEffect(() => {
		const currentIndex = document.location.pathname
			.toString()
			.split('/')
			.findIndex((id) => id === item.id);

		if (currentIndex > -1) {
			customizeStore.onChangeIsOpen(item.id);
		}
	}, []);

	return (
		<ListItemButton
			{...listItemProps}
			disabled={item.disabled}
			sx={{
				borderRadius: `${customizeStore.borderRadius}px`,
				mb: 0.5,
				alignItems: 'flex-start',
				backgroundColor: level > 1 ? 'transparent !important' : 'inherit',
				py: level > 1 ? 1 : 1.25,
				pl: `${level * 24}px`
			}}
			selected={customizeStore.isOpen.findIndex((id) => id === item.id) > -1}
			onClick={() => itemHandler(item.id)}
		>
			<ListItemIcon sx={{ my: 'auto', minWidth: !item?.icon ? 18 : 36 }}>{itemIcon}</ListItemIcon>
			<ListItemText
				primary={
					<Typography variant={customizeStore.isOpen.findIndex((id) => id === item.id) > -1 ? 'h5' : 'body1'} color="inherit">
						{item.title}
					</Typography>
				}
				secondary={
					item.caption && (
						<Typography variant="caption" sx={{ ...theme.typography.subMenuCaption }} display="block" gutterBottom>
							{item.caption}
						</Typography>
					)
				}
			/>
			{item.chip && (
				<Chip
					color={item.chip.color}
					variant={item.chip.variant}
					size={item.chip.size}
					label={item.chip.label}
					avatar={item.chip.avatar && <Avatar>{item.chip.avatar}</Avatar>}
				/>
			)}
		</ListItemButton>
	);
};

NavItem.propTypes = {
	item: PropTypes.object,
	level: PropTypes.number
};

export default NavItem;
