import web3 from './web3';
import campaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
	JSON.parse(campaignFactory.interface),
	'0xd9CCC3FaCf964578a10F48F0ADEfb0AE51890046'
);

export default instance;
