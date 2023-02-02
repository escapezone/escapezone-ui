import React, { ReactNode, Ref, forwardRef } from 'react';

import { motion, useCycle } from 'framer-motion';

type TAnimateButton = {
	children: ReactNode;
	offset?: Number;
	type: 'slide' | 'scale' | 'rotate' | undefined;
	direction?: 'up' | 'down' | 'left' | 'right';
	scale?: {
		hover: Number;
		tap: Number;
	};
};

const AnimateButton = forwardRef(({ children, type, direction, offset, scale }: TAnimateButton, ref: Ref<any>) => {
	const offset1 = direction === 'left' || direction === 'up' ? offset : 0;
	const offset2 = direction === 'left' || direction === 'up' ? 0 : offset;

	const [x, cycleX] = useCycle(offset1, offset2);
	const [y, cycleY] = useCycle(offset1, offset2);

	switch (type) {
		case 'rotate':
			return (
				<motion.div
					ref={ref}
					animate={{ rotate: 360 }}
					transition={{
						repeat: Infinity,
						repeatType: 'loop',
						duration: 2,
						repeatDelay: 0
					}}
				>
					{children}
				</motion.div>
			);
		case 'slide':
			if (direction === 'up' || direction === 'down') {
				return (
					<motion.div ref={ref} animate={{ y: y ? y : '' }} onHoverEnd={() => cycleY()} onHoverStart={() => cycleY()}>
						{children}
					</motion.div>
				);
			}
			return (
				<motion.div ref={ref} animate={{ x: x ? x : '' }} onHoverEnd={() => cycleX()} onHoverStart={() => cycleX()}>
					{children}
				</motion.div>
			);

		case 'scale':
		default:
			if (typeof scale === 'number') {
				scale = {
					hover: scale,
					tap: scale
				};
			}
			return (
				<motion.div ref={ref} whileHover={{ scale: scale?.hover }} whileTap={{ scale: scale?.tap }}>
					{children}
				</motion.div>
			);
	}
});

AnimateButton.displayName = 'AnimateButton';

export default AnimateButton;
