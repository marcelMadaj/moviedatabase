import styled from "styled-components";

interface Movie{
    Title: string,
    Year: string,
    Poster: string,
    imdbID: string,
}

interface MovieListProps {
    movies: Movie[]
    onClick: (id:string) => void
}


const MovieList: React.FC<MovieListProps> = ({ movies, onClick }) => {
    return (
        <MoviesList>
            {movies.map((movie) => (
                <MovieCard key={movie.imdbID} onClick={() => onClick(movie.imdbID)}>
                    <h2>{movie.Title}</h2>
                    <p>{movie.Year}</p>
                    <StyledImage src={movie.Poster} alt={movie.Title} />
                </MovieCard>
            ))}
        </MoviesList>
    );
}

export default MovieList;

const MoviesList = styled.div`
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    margin-top: 20px;
`

const MovieCard = styled.div`
    border-radius: 8px;
    padding: 8px;
    border: 1px solid #ccc;
    cursor: pointer;
`

const StyledImage = styled.img`
    width: 100%;
    height: auto;
`