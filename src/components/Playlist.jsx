import React, { Component } from 'react'
import Media from './Media';
import './Playlist.css';

export class Playlist extends Component {
  render() {
      const playlist = this.props.data.categories[0].playlist;
    return (
      <div className='Playlist'>
          {
              playlist.map((item) => {
                    return <Media 
                    key={item.id}
                    title={item.title}
                    author={item.author}
                    image={item.cover}
                    type={item.type}/>
              })
          }
          
        
      </div>
    )
  }
}

export default Playlist
