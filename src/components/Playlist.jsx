import React from 'react'
import Media from './Media';
import './Playlist.css';
import './icons/components/Play';
import Play from './icons/components/Play';
import Volume from './icons/components/Volume';
import Pause from './icons/components/Pause';
import FullScreen from './icons/components/FullScreen';

function Playlist (props){
      const playlist = props.data.categories[0].playlist;
    return (
      <div className='Playlist'>
      <Play size={50} color="red" />
      <Volume size={50} color="black" />
      <Pause size={50} color="black" />
      <FullScreen size={50} color="black" />
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
export default Playlist
