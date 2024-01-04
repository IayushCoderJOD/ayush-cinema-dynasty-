import { useState, useEffect } from 'react';
import './App.css';
import MovieCard from './MovieCard';

interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

function App() {

  const app_url:string="https://www.omdbapi.com?apikey=ca751b42";

  const [searchTerm, setSearchTerm] = useState<string>("iron man");
  const [searchMoviesList, setSearchMoviesList] =useState<Movie[]>([]);

  const searchMovies=async (title:string)=>{
    const response=await fetch(`${app_url}&s=${title}`);
    const json=await response.json();
    setSearchMoviesList(json.Search);
  }
  useEffect(()=>{
    searchMovies(searchTerm);
  },[])

  return (
    <div>
      <h1 className='text-gray-400 cursor-pointer font-serif pt-8 pl-[32%] font-semibold text-4xl hover:text-gray-50' >
        <span className='text-yellow-100 text-5xl' >A</span>YUSH{' '}
        <span className='text-yellow-100 text-5xl' >C</span>INEMA{' '}
        <span className='text-yellow-100 text-5xl' >D</span>YNASTY
      </h1>
      <div className='flex'>
        <input
          type="text"
          className='mt-5 ml-[20%] rounded-full shadow-2xl text-gray-800 bg-yellow-100 font-medium w-[60%] border-2 border-gray-900 p-3 text-2xl '
          placeholder='Search the movies'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
        onClick={()=>searchMovies(searchTerm)}
        className='text-4xl pt-4 pl-2'>🔍</button>
      </div>
      <div className='grid grid-cols-5 pl-6 justify-evenly  pt-16' >
        {
          searchMoviesList.map((obj)=>(
            <MovieCard title={obj.Title} poster={obj.Poster} type={obj.Type} year={obj.Year}     />
          ))
        }
      </div>
    </div>
  );
}

export default App;
