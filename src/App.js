import React, { Component } from 'react';
import Playlist from './components/Playlist';
import data from './data/api.json';

class App extends Component {
  render() {
    return (
    
        <Playlist data={data} />
    
    );
  }
}

export default App;
