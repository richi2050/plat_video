import React, { Component } from 'react'
import './Media.css';

export default class Media extends Component {
  render() {
    
    return (
      <div className='Media'>
          <div className="Media-cover">
              <img src="img/media_1.jpg" alt="" width={260} height={160} className="Media-image"/>
              <h3 className="Media-title">Titulo</h3>
              <p className="Media-author">nombre del autor</p>
          </div>
      </div>
    )
  }
}
