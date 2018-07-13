import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { toggleMessage } from '../actions';

const Toggle = ({ messageVisibility, toggleMessage }) => (
  <Fragment>
    {messageVisibility && (
      <p>You will be seeing this if redux action is toggled</p>
    )}
    <button onClick={toggleMessage}>Toggle Me</button>
  </Fragment>
);

const mapStateToProps = state => ({
  messageVisibility: state.message.messageVisibility
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ toggleMessage }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Toggle);
