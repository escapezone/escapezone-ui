import React from 'react';
import cx from 'clsx';

import { withStyles } from '@mui/styles';
import { Avatar, Grid, Typography } from '@mui/material';

// https://mui-treasury.com/

const MessageBoxStyle = ({ palette }: { palette: any }) => {
	return {
		avatar: { width: '32px', height: '32px' },
		leftRow: {
			textAlign: 'left'
		},
		rightRow: {
			textAlign: 'right'
		},
		msg: {
			padding: '15px',
			borderRadius: 4,
			marginBottom: 4,
			display: 'inline-block',
			wordBreak: 'break-word',
			fontSize: '14px'
		},
		left: {
			borderTopRightRadius: '15px',
			borderBottomRightRadius: '15px',
			backgroundColor: palette.common.white
		},
		right: {
			borderTopLeftRadius: '15px',
			borderBottomLeftRadius: '15px',
			backgroundColor: palette.primary.main,
			color: palette.common.white
		},
		leftFirst: {
			borderTopLeftRadius: '15px'
		},
		leftLast: {
			borderBottomLeftRadius: '15px'
		},
		rightFirst: {
			borderTopRightRadius: '15px'
		},
		rightLast: {
			borderBottomRightRadius: '15px'
		}
	};
};

type TMessageBox = {
	classes: any;
	avatar: string;
	messages: string[];
	side: 'left' | 'right';
};

const MessageBox = withStyles(MessageBoxStyle, { name: 'ChatMsg' })((props: TMessageBox) => {
	const { classes, avatar, messages, side = 'left' } = props;
	const attachClass = (index: number) => {
		if (index === 0) {
			return classes[`${side}First`];
		}
		if (index === messages.length - 1) {
			return classes[`${side}Last`];
		}
		return '';
	};

	return (
		<Grid container spacing={2} justify={side === 'right' ? 'flex-end' : 'flex-start'}>
			{side === 'left' && (
				<Grid item>
					<Avatar src={avatar} className={cx(classes.avatar)} />
				</Grid>
			)}
			<Grid item xs={8}>
				{messages.map((msg, index) => (
					<div key={index} className={classes[`${side}Row`]}>
						<Typography align={'left'} className={cx(classes.msg, classes[side], attachClass(index))}>
							{msg}
						</Typography>
					</div>
				))}
			</Grid>
		</Grid>
	);
});

export default MessageBox;
