import {useEffect, useState} from "react";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import MovieList from "../molecules/MovieList";
import Pagination from "../molecules/Pagination";
import SearchHeader from "../molecules/SearchHeader";

interface Movie{
    Title: string,
    Year: string,
    Poster: string,
    imdbID: string,
}

const  MovieSearch: React.FC = () => {
    const navigate = useNavigate();
    const [movies, setMovies] = useState<Movie[]>([]);
    const [query, setQuery] = useState<string>('');
    const moviesPerPage = 3
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [hydrated, setHydrated] = useState<boolean>(false)

    useEffect(() => {
        const savedQuery = localStorage.getItem('lastQuery');
        const savedMovies = localStorage.getItem('lastMovies');
        const savedPage = localStorage.getItem('lastPage');
        if (savedQuery) setQuery(savedQuery)
        if (savedMovies) setMovies(JSON.parse(savedMovies));
        if(savedPage) setCurrentPage(parseInt(savedPage));
        setTimeout(()=>{
           setHydrated(true)
        }, 0)
    }, []);

    useEffect(() => {
        if(hydrated) {
            localStorage.setItem('lastPage', currentPage.toString());
        }
    }, [currentPage, hydrated]);

    const fetchMovies = async () => {
        setCurrentPage(1)
        localStorage.setItem("lastPage", "1");
        const response = await fetch(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=${query}`)
        const data = await response.json();
            if (data.Search) {
                 setMovies(data.Search);
                 localStorage.setItem('lastQuery', query);
                 localStorage.setItem('lastMovies', JSON.stringify(data.Search));
                } else {
                setMovies([]);
                localStorage.setItem('lastQuery', query);
                localStorage.setItem('lastMovies', JSON.stringify(data.Search));
                }
            }

    const handleClickToDetail = (id:string) => {
        navigate(`/detail/${id}`);
    }

    if (!hydrated) return <p>Loading...</p>;

    const lastMovie = currentPage * moviesPerPage;
    const firstMovie = lastMovie - moviesPerPage;
    const currentMovie = movies.slice(firstMovie, lastMovie);
    const numberOfPages = Math.ceil(movies.length / moviesPerPage);

    return (
        <Container>
            <SearchHeader query={query} onQueryChange={setQuery} onSearch={fetchMovies}/>
            <MovieList movies={currentMovie} onClick={handleClickToDetail}/>
           <Pagination totalPages={numberOfPages} currentPage={currentPage} onPageChange={setCurrentPage}/>
        </Container>
    )
}

export default MovieSearch;

const Container = styled.div`
    max-width: 800px;
    margin: 40px auto;
    padding: 20px;
    text-align: center;
`