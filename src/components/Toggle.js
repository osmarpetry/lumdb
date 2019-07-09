import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { toggleMessage } from '../redux/toggle/actions'

const Toggle = ({ messageVisibility, toggleMessage }) => (
    <Fragment>
        {messageVisibility && (
            <p>You will be seeing this if redux action is toggled</p>
        )}
        <button onClick={toggleMessage}>Toggle Me</button>
    </Fragment>
)

const mapStateToProps = state => ({
    messageVisibility: state.toggle.messageVisibility
})

const mapDispatchToProps = dispatch =>
    bindActionCreators({ toggleMessage }, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Toggle)
