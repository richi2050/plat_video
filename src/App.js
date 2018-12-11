import React, { Component } from 'react';
import Media from './components/Media';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Media 
          title='este es un titulo prueba ...' 
          author='Ricardo Lugo Recillas'
          image="img/covers/bitcoin.jpg"/>
      </div>
    );
  }
}

export default App;
