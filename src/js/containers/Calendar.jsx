import { connect } from 'react-redux';
import Component from '../components/Calendar';
import * as actionCreators from '../actions/auth';

const mapStateToProps = (state) => {
  console.log(state, 'state calendar');
  return state;
};

export default connect(mapStateToProps, actionCreators)(Component);
