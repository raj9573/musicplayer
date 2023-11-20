import React, { useState, useEffect,useRef } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
const App = () => {

  const [songs, setSongs] = useState([
  
    { title: 'Default Song Title', singer: 'Default Singer', songUrl: 'default-url.mp3' }
  ]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  var len = songs.length
  const audioPlayer =useRef(null);
  
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/app/songs/')
      .then(response => {
        setSongs(response.data);
      })
      .catch(error => {
        console.log("Error fetching songs:", error);
      });
  }, []);
  useEffect(()=>{
    if(audioPlayer.currentSongIndex){
      audioPlayer.currentSongIndex.play();
    }
  },[currentSongIndex]);
  const playNextSong = () => {

    setCurrentSongIndex((currentSongIndex + 1) % len);
  };

  const playPreviousSong = () => {

    setCurrentSongIndex((currentSongIndex - 1 + songs.length) % len);
  };

  return (
    <div>
  <center><h1>Music Player</h1></center>
  <div className='navbar'>
  <BrowserRouter>
  <Navbar />
  </BrowserRouter>
  
  </div>
    

      <div className='Player'>
      <div>
      <img src={songs[currentSongIndex].photo} /></div>
      
        <div>
         
          <audio controls src={songs[currentSongIndex].song}></audio>
          <p>Singer: {songs[currentSongIndex].singer}</p>
          <div>
            <button onClick={playPreviousSong}>Previous</button>
            <button onClick={playNextSong}>Next</button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
