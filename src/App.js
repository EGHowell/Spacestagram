import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react'
import LikeButton from './LikeButton'

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [nasaData, setNasaData] = useState([]);
  const [likedPhoto, setLikedPhoto] = useState(false)

  useEffect(() => {
    axios({
      url: 'https://api.nasa.gov/planetary/apod',
      method: 'GET',
      dataResponse: 'json',
      params: {
        api_key: 'CT3naHr22Inc0Dye93NCJK9GIAXoaHdxl2i0jUM7',
        start_date: '2021-12-25'
      }
    }).then((response) => {
      setIsLoading(false)
      setNasaData(response.data)
    })
  }, [])



  return (
    <div className="App">
      {
        isLoading ? <div className = "loading">Loading&#8230;</div> :
        nasaData.map(photo => {
          return ( 
          <li key = {photo.title}>
            <h2>{photo.title}</h2>
            <p>{photo.date} </p>
            <img src={photo.hdurl}/> 
            <div id='root'>
              <LikeButton/>
            </div>
          </li> )
        })
      }
    </div>
  );
}

export default App;
