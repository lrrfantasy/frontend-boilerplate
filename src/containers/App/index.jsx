import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as TodoActions from '../../actions/todos'

import style from './style.styl'

@connect(() => ({}), TodoActions)
export default class App extends Component {
  render() {
    return (
      <div className={style.normal}>
      </div>
    )
  }
}
