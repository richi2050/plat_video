import React from 'react'
import {createPortal} from 'react-dom'

export default class ModalContainer extends React.Component {
  render() {
    return createPortal(
      this.props.children,
      document.getElementById('modal-container')
    )
  }
}