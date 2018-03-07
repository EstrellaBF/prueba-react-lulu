import React, { Component } from 'react';
// import logo from './logo.svg';
import './MusicApp.css';
import Music from './Music';

class MusicApp extends Component {
  render() {
    return (
      <div className="App">
        <Music
          artista = 'il divo'
          canciones = {['Amazing Grace', 'Hallelujah', 'Adagio']}
          img = 'il-divo.jpg'
          bio = 'cuarteto de tenores'
        />
      </div>
    );
  }
}

export default MusicApp;
