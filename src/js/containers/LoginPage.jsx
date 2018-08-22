import { connect } from 'react-redux';
import Component from '../components/LoginPage';
import * as actionCreators from '../actions/auth';


const mapStateToProps = state => state;

const Container = connect(
  mapStateToProps,
  actionCreators,
)(Component);

export default Container;
