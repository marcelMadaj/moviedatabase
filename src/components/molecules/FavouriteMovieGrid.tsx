import styled from "styled-components";


interface FavouriteMovieData{
    Title: string,
    Year: string,
    Poster: string,
    imdbID: string,
}

interface FavouriteMovieGridProps {
    favourites: FavouriteMovieData[]
    onSelect: (id:string) => void
}


const FavouriteMovieGrid: React.FC<FavouriteMovieGridProps> = ({ favourites, onSelect }) => {
    return (
       <Grid>
           {favourites.map((movie)=> (
               <MovieCard key={movie?.imdbID} onClick={()=>onSelect(movie.imdbID)}>
                   <img src={movie?.Poster} alt={movie?.Title}/>
                   <h3>{movie?.Title}</h3>
                   <p>Year: {movie?.Year}</p>
               </MovieCard>
           ))}
       </Grid>
    );
}

export default FavouriteMovieGrid;

const Grid = styled.div`
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
`

const MovieCard = styled.div`
    border: 1px solid #ddd;
    padding: 10px;
    border-radius: 8px;
    text-align: center;
    background-color: #f8f8f8;
    cursor: pointer;

    img {
        max-width: 100%;
        height: auto;
        border-radius: 4px;
    }
`