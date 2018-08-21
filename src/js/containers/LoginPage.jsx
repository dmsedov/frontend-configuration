import { connect } from 'react-redux';
import Component from '../components/LoginPage';
import * as actionCreators from '../actions/auth';


function mapStateToProps() {
  return {

  };
}

const Container = connect(
  mapStateToProps,
  actionCreators,
)(Component);

export default Container;
