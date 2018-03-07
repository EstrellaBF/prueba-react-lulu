import React, {Component} from 'react';
import './Music.css'

class Music extends Component {
  render() {
    // const {artista, img, bio} = this.props 
    const {artista, img, bio} = this.props
    const musicArtist = this.props.canciones.map((cancion, index)=>{
      return <li key={index}>{cancion}</li>
    })
    return(
      <div>
        <div>
          <img src={img} alt={artista}/>
        </div>
        <div>
          <h3>{artista}</h3>
          <ul></ul>
          <p>{bio}</p>
        </div>
      </div>
    );
  }
}

export default Music;