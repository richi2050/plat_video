import React, { PureComponent } from 'react'
import './Media.css';
import PropTypes from 'prop-types';

class Media extends PureComponent {

  state = {
      author : 'Author inicial',
      title: 'title inicial',
      image: 'image inicial'
  }
  /*
  constructor(props){
    super(props)
    this.state = {
      author: props.author,
      title: props.title,
      image: props.image
    }*/
     /*inicia forma de  asignar el vento a los props con EMAS6*/ 
     /*
    this.handleClick = this.handleClick.bind(this);
    */
   /*fin  forma de  asignar el vento a los props con EMAS6*/ 

  /*} */
  

  
 
  render() {
    return (
      <div className='Media' onClick={this.props.handleClick}>
          <div className="Media-cover">
              <img src={this.props.image} alt=""  
              width={260} height={160} className="Media-image"/>
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