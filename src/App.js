import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react'
import LikeButton from './LikeButton'



function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [nasaData, setNasaData] = useState([]);

  useEffect(() => {
    axios({
      url: 'https://api.nasa.gov/planetary/apod',
      method: 'GET',
      dataResponse: 'json',
      params: {
        api_key: 'CT3naHr22Inc0Dye93NCJK9GIAXoaHdxl2i0jUM7',
        start_date: '2022-01-01'
      }
    }).then((response) => {
      setIsLoading(false);
      setNasaData(response.data.reverse());
    })
  }, [])


  return (
    <div className="App">

      <body>

        <header className='wrapper'>
          <h1>Spacetagram</h1>
          <p>Brought to you by NASA's Astronomy Photo of the Day (APOD) API</p>
        </header>
        
        <main className='wrapper'>
          {
            isLoading ? <div className = "loading">Loading&#8230;</div> :
            nasaData.reverse().map(function(photo, index) {
         
              return ( 
                
                  <li className="post" key = {index}>
                    <div key = {photo.title} id = {photo.title}>
                      <div className='postTitle'>
                        <h2>{photo.title}</h2>
                        <p>{photo.date} </p>
                      </div>
                      <img src={photo.hdurl} alt={photo.explanation}/>
                      <div className='postData'>
                        <LikeButton />
                        <p className='postInfo'>{photo.explanation}</p>
                      </div>
                    </div>
                  </li>  
              )
            })
          }
        </main>
        
        <footer>
          <p>
            &copy; Eric Howell 2022
          </p>
        </footer>
        
      </body>
      
    </div>
  );
}

export default App;
