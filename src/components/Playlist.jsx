import React from 'react'
import Media from './Media';
import './Playlist.css';


function Playlist (props){

    return (
      <div className='Playlist'>
          {
              props.playlist.map((item) => {
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
export default Playlist
