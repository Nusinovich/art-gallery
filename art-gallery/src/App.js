import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'
import Gallery from './Gallery';
import Buttons from './ButtonBar';

function App() {

  let [artId, setArtId] = useState(12720)
  let [data, setData] = useState({})

  useEffect(() => {
    document.title = 'Welcome to ArtWorld'
    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`)
    .then(response => response.json())
    .then(resData => setData(resData))
  },[artId])
  
  const handleIterate = (e) => {
    setArtId(artId + Number(e.target.value))
  }
 
  return (
  <div>
    <h1>Welcome to our Gallery site!!!</h1>
    <Gallery objectImg={data.primaryImage} artist={data.artistDisplayName} title={data.title} Year={data.accessionYear} />
    <Buttons handleIterate={handleIterate} />
  </div>
  )
}

export default App;
