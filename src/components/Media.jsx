import React, { Component } from 'react'
import './Media.css';
import PropTypes from 'prop-types';

class Media extends Component {
  /*inicia forma de  asignar el vento a los props con EMAS6*/ 
  /*
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this);
  } 
  */
  /*fin  forma de  asignar el vento a los props con EMAS6*/ 

  handleClick = (event) => {
    console.log(this.props);
  }
 
  render() {
    return (
      <div className='Media' onClick={this.handleClick}>
          <div className="Media-cover">
              <img src={this.props.image} alt="" width={260} height={160} className="Media-image"/>
              <h3 className="Media-title">{ this.props.title}</h3>
              <p className="Media-author">{ this.props.author}</p>
          </div>
      </div>
    )
  }
}

Media.propTypes = {
  image:PropTypes.string.isRequired,
  title:PropTypes.string.isRequired,
  author:PropTypes.string.isRequired,
  type: PropTypes.oneOf(['video', 'audio'])
}

export default Media;