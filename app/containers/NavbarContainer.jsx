import {connect} from 'react-redux';
import Navbar from '../components/Navbar';
import {logoutUserAction} from '../reducers/auth'
import {logout} from '../reducers/auth'
import {ascending, descending} from '../reducers/category'

const mapStateToProps = ({ascending,descending}) => ({ascending,descending})


const mapDispatchToProps = dispatch => ({

  logout: () => dispatch(logout()),
  ascending: () => dispatch(ascending()),
  descending: () => dispatch(descending())

});


// ;
export default connect(mapStateToProps,mapDispatchToProps)(Navbar);