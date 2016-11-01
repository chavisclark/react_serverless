import React from 'react'
import Head from './Head'

export default class Main extends React.Component {
  render() {
    return (
      <div>
          {this.props.children}
      </div>

    )
  }
}