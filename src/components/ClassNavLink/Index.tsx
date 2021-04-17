import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

interface Props {
  path: string;
  children: string;
}

export default class Index extends Component<Props> {
  render() {
    const {path, children} = this.props
    return (
      <NavLink to={path} activeClassName="actived-menu">{children}</NavLink>
    )
  }
}

