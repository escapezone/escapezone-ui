import React, { Ref, forwardRef, ReactNode } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Card, CardContent, CardHeader, Divider, Typography } from '@mui/material';

// constant
const headerSX = {
	'& .MuiCardHeader-action': { mr: 0 }
};

type TMainCard = {
	border?: boolean;
	boxShadow?: boolean;
	children: ReactNode;
	content: boolean;
	contentClass?: string;
	contentSX?: any;
	darkTitle?: boolean;
	secondary?: any;
	shadow?: string;
	sx: {
		maxWidth?: { xs: number; lg: number };
		margin?: { xs: number; md: number };
		'& > *'?: { flexGrow: number; flexBasis: string };
	};
	title?: any;
};

const MainCard = forwardRef(
	(
		{
			border = true,
			boxShadow,
			children,
			content = true,
			contentClass = '',
			contentSX = {},
			darkTitle,
			secondary,
			shadow,
			sx = {},
			title,
			...others
		}: TMainCard,
		ref: Ref<any>
	) => {
		const theme = useTheme();

		return (
			<Card
				ref={ref}
				{...others}
				sx={{
					border: border ? '1px solid' : 'none',
					borderColor: theme.palette.primary[200] + 75,
					':hover': {
						boxShadow: boxShadow ? shadow || '0 2px 14px 0 rgb(32 40 45 / 8%)' : 'inherit'
					},
					...sx
				}}
			>
				{/* card header and action */}
				{!darkTitle && title && <CardHeader sx={headerSX} title={title} action={secondary} />}
				{darkTitle && title && <CardHeader sx={headerSX} title={<Typography variant="h3">{title}</Typography>} action={secondary} />}

				{/* content & header divider */}
				{title && <Divider />}

				{/* card content */}
				{content && (
					<CardContent sx={contentSX} className={contentClass}>
						{children}
					</CardContent>
				)}
				{!content && children}
			</Card>
		);
	}
);

MainCard.displayName = 'MainCard';

export default MainCard;
