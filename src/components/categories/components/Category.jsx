import React from 'react'
import Playlist from '../../Playlist';

export default function Category(props) {
  return (
    <div>
        <p>{props.description}</p>
        <h2>{props.title}</h2>
          <Playlist 
            playlist={props.playlist}
          />
    </div>
  )
}
