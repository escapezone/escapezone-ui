declare module '@mui/material/styles/createTypography' {
	interface FontStyle {
		commonAvatar: { cursor: string; borderRadius: string };
		smallAvatar: { width: string; height: string; fontSize: string };
		mediumAvatar: { width: string; height: string; fontSize: string };
		largeAvatar: { width: string; height: string; fontSize: string };
		customInput: { marginTop: number; marginBottom: number };
	}
}

export default function themeTypography(theme: any) {
	return {
		fontFamily: theme?.customization?.fontFamily,
		h6: {
			fontSize: '0.75rem',
			fontWeight: 500,
			color: theme.heading
		},
		h5: {
			fontSize: '0.875rem',
			fontWeight: 500,
			color: theme.heading
		},
		h4: {
			fontSize: '1rem',
			fontWeight: 600,
			color: theme.heading
		},
		h3: {
			fontSize: '1.25rem',
			color: theme.heading,
			fontWeight: 600
		},
		h2: {
			fontSize: '1.5rem',
			fontWeight: 700,
			color: theme.heading
		},
		h1: {
			fontSize: '2.125rem',
			fontWeight: 700,
			color: theme.heading
		},
		subtitle1: {
			fontSize: '0.875rem',
			fontWeight: 500,
			color: theme.textDark
		},
		subtitle2: {
			fontSize: '0.75rem',
			fontWeight: 400,
			color: theme.darkTextSecondary
		},
		caption: {
			fontSize: '0.75rem',
			color: theme.darkTextSecondary,
			fontWeight: 400
		},
		body1: {
			fontSize: '0.875rem',
			fontWeight: 400,
			lineHeight: '1.334em'
		},
		body2: {
			letterSpacing: '0em',
			fontWeight: 400,
			lineHeight: '1.5em',
			color: theme.darkTextPrimary
		},
		button: {
			textTransform: 'capitalize'
		},
		customInput: {
			marginTop: 1,
			marginBottom: 1,
			'& > label': {
				top: 23,
				left: 0,
				color: theme.grey500,
				'&[data-shrink="false"]': {
					top: 5
				}
			},
			'& > div > input': {
				padding: '30.5px 14px 11.5px !important'
			},
			'& legend': {
				display: 'none'
			},
			'& fieldset': {
				top: 0
			}
		},
		mainContent: {
			backgroundColor: theme.background,
			width: '100%',
			minHeight: 'calc(100vh - 88px)',
			flexGrow: 1,
			padding: '20px',
			marginTop: '88px',
			marginRight: '20px',
			borderRadius: `${theme?.customization?.borderRadius}px`
		},
		menuCaption: {
			fontSize: '0.875rem',
			fontWeight: 500,
			color: theme.heading,
			padding: '6px',
			textTransform: 'capitalize',
			marginTop: '10px'
		},
		subMenuCaption: {
			fontSize: '0.6875rem',
			fontWeight: 500,
			color: theme.darkTextSecondary,
			textTransform: 'capitalize'
		},
		commonAvatar: {
			cursor: 'pointer',
			borderRadius: '8px'
		},
		smallAvatar: {
			width: '22px',
			height: '22px',
			fontSize: '1rem'
		},
		mediumAvatar: {
			width: '34px',
			height: '34px',
			fontSize: '1.2rem'
		},
		largeAvatar: {
			width: '44px',
			height: '44px',
			fontSize: '1.5rem'
		}
	};
}
