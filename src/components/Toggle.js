import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getMovies } from '../redux/movies/actions';
import { toggleMessage } from '../redux/toggle/actions';

const Toggle = ({ messageVisibility, toggleMessage, getMovies }) => (
  <Fragment>
    {messageVisibility && (
      <p>You will be seeing this if redux action is toggled</p>
    )}
    <button onClick={toggleMessage}>Toggle Me</button>
    <button onClick={getMovies}>Load Movies</button>
  </Fragment>
);

const mapStateToProps = state => ({
  messageVisibility: state.message.messageVisibility
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ toggleMessage, getMovies }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Toggle);
