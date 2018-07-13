import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { toggleMessage } from '../actions';

const Toggle = ({ messageVisibility, dispatch }) => (
  <Fragment>
    {messageVisibility && (
      <p>You will be seeing this if redux action is toggled</p>
    )}
    <button onClick={() => dispatch(toggleMessage())}> Toggle Me</button>
  </Fragment>
);

const mapStateToProps = state => ({
  messageVisibility: state.message.messageVisibility
});

export default connect(mapStateToProps)(Toggle);
