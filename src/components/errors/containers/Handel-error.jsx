import React, { Component } from 'react'
import RegularError from '../components/Regular-error'

export default class HandelError extends Component {
    state = {
        handleError : false
    }
    
    componentDidCatch(error,info){
        this.setState({
            handleError : true
        })
    }

  render() {
      if(this.state.handleError){
        return (
            <RegularError />
          )
      }
    return this.props.children;
  }
}
