import {connect} from 'react-redux';
import Homepage from '../components/Homepage';
import HomepageFilter from '../components/HomepageFilter';


//make sure root reducer has this key allCastles
const mapStateToProps = ({allCastles, category}) => ({
    allCastles,
    category
})

//onSubmit etc should go here to put into my presentational component 

// function mapDispatchToProps () {
//   return {};
// }

// const mapDispatchToProps = dispatch => ({
//   go: album => dispatch(fetchAllCastles())
// });


// ;
export default connect(
  mapStateToProps
)(HomepageFilter(Homepage));