import './App.css';
import { useState } from 'react'



function App() {
  const [movie,setMovie] = useState({
    content: {}
  });
  const handleSubmit = (e) =>{
    e.preventDefault();
    const title = e.target[0].value

    fetch(' http://www.omdbapi.com/?i=tt3896198&apikey=c0e9719a' + '&t=' + title)
    .then(res => res.json())
    .then(content => setMovie({ content }))
    .then(console.log(movie))
  };
 
  return (
    <div className="App">
    <form onSubmit={handleSubmit}>
      <input type='text' />
     <button>Búsqueda</button>
    <div><h1>{movie.content.Title}</h1>
      <p>{movie.content.Plot}</p>
      <img src={movie.content.Poster} style={{
        width: '150px'
      }}/>
    </div>
    </form>
    </div>
  );
}

export default App;
