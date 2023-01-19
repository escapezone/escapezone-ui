import { Card } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';

const MaterialIcons = () => (
	<MainCard title="Material Icons" secondary={<SecondaryAction link="https://next.material-ui.com/components/material-icons/" />}>
		<Card sx={{ overflow: 'hidden' }}>Link로 이동하기 https://material-ui.com/components/material-icons/</Card>
	</MainCard>
);

export default MaterialIcons;
