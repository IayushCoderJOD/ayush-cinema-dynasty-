
interface MovieCardProps{
    title:string;
    poster:string;
    type:string;
    year:string;
}

const MovieCard:React.FC<MovieCardProps>  = ({title,poster,type,year}) => {
  return (
    <div className="text-xl font-normal text-white pb-4 shadow-xl " >
        <img className="rounded-2xl h-72 w-56" src={poster} alt="poster not available" />
        <h1 className="pl-2">{title}</h1>
        <h1 className="pl-2">{type}</h1>
        <h1 className="pl-2">{year}</h1>
        
    </div>
  )
}

export default MovieCard