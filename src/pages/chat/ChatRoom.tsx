import React from 'react';
import MessageBox from './MessageBox';

type TChatRoom = {};

const ChatRoom = (props: TChatRoom) => {
	return (
		<>
			<MessageBox
				avatar={''}
				messages={[
					'Hi Jenny, How r u today?',
					'Did you train yesterday',
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat lacus laoreet non curabitur gravida.'
				]}
			/>
			<MessageBox side={'right'} messages={["Great! What's about you?", 'Of course I did. Speaking of which check this out']} />
			<MessageBox avatar={''} messages={['Im good.', 'See u later.']} />
		</>
	);
};

export default ChatRoom;
