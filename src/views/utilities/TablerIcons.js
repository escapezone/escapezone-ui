import { Card } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';

// assets
import LinkIcon from '@mui/icons-material/Link';

const TablerIcons = () => (
	<MainCard title="Tabler Icons" secondary={<SecondaryAction icon={<LinkIcon fontSize="small" />} link="https://tablericons.com/" />}>
		<Card sx={{ overflow: 'hidden' }}>Link로 이동하기 https://tablericons.com/</Card>
	</MainCard>
);

export default TablerIcons;
