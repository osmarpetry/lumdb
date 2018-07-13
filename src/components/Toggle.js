import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

const Toggle = ({messageVisibility}) => (
  <Fragment>
    {messageVisibility && (
      <p>You will be seeing this if redux action is toggled</p>
    )}
    <button>Toggle Me</button>
  </Fragment>
);

const mapStateToProps = state => ({
  messageVisibility: state.message.messageVisibility
});

export default connect(mapStateToProps)(Toggle);
