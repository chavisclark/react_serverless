import React from 'react'
import {PropTypes} from 'react'
import {Router} from 'react-router'
import routes from '../routes'

export default class _Root extends React.Component {
  render () {
    var {history } = this.props;
    return (

        <div>
          <Router history={history} routes={routes} />
        </div>

    )
  }
}

_Root.propTypes = {
  history: PropTypes.object.isRequired
}
