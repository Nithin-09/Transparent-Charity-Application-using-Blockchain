import React from 'react';
import { Container,Icon,Grid,Rail,Segment } from 'semantic-ui-react';
import { Link } from '../routes';
export default() =>{
	return (
		<Container fluid style={{marginTop:50,paddingTop:100}}>
			<Grid centered columns={3}>
    				<Grid.Column>
        				<Rail dividing position='left'>
          					CrowdCoin, IBC <Icon name='copyright' /> 2022
        				</Rail>
        				<Rail>
        					<Icon name='call' />+91 9390889745 
        					 <Icon name='home' />MGIT Hyderabad
        				</Rail>
				        <Rail dividing position='right'>
        				        Follow us on <Icon name='linkedin square' /> <Icon name='facebook f' /> <Icon name='pinterest square' /> <Icon name='twitter' /> <Icon name='google plus' /> <Icon name='youtube play' /> <Icon name='quora' />
        				</Rail>
    				</Grid.Column>
 			 </Grid>
		</Container>
	);
};