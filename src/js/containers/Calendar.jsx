import { connect } from 'react-redux';
import Component from '../components/Calendar';
import * as actionCreators from '../actions/auth';

const mapStateToProps = state => state;

export default connect(mapStateToProps, actionCreators)(Component);
