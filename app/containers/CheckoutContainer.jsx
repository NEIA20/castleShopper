import {connect} from 'react-redux';

import Checkout from '../components/Checkout';
import { castles, users } from '../../db/data';
import { buyCastle } from '../action-creators/checkout';

const mapStateToProps = ({ castle, user, oneCastle }) => ({
	castle: castles[0],
	user: users[0], 
	oneCastle
});

const mapDispatchToProps = dispatch => ({
	handleSubmit: castleId => dispatch(buyCastle(castleId))
});
// // connect(mapStateToProps, mapDispatchToProps)(AllPuppies);

// const containerComponentCreator = connect(mapStateToProps, mapDispatchToProps);

// const AllPuppiesContainer = containerComponentCreator(AllPuppies);


export default connect(mapStateToProps, mapDispatchToProps)(Checkout);