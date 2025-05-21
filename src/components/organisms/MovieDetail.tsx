import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import styled from "styled-components";
import MovieDetailCard from "../molecules/MovieDetailCard";
import HomeButton from "../atoms/HomeButton";

interface MovieDetailData {
    Title: string;
    Year: string;
    Poster: string;
    Genre: string;
    Actors: string;
    Director: string;
}

const  MovieDetail: React.FC = () => {
    const {id} =  useParams<{ id: string }>();
    const [movie, setMovie] = useState<MovieDetailData | null>(null)
    const [isFavorite, setFavorite] = useState<boolean>(false);

    useEffect(() => {
        if (!id) return;
        const fetchMovie = async () => {
            const response = await fetch(`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&i=${id}`);
            const data = await response.json();
            setMovie(data);
        }
        fetchMovie();
    }, [id]);

    useEffect(() => {
        if (!id) return;
        const favs = JSON.parse(localStorage.getItem("favorites") || "[]");
        setFavorite(favs.includes(id));
    }, [id]);

    const toggleFavorite = () => {
        if (!id) return;
        let favs = JSON.parse(localStorage.getItem("favorites") || "[]")
        if (favs.includes(id)) {
            favs = favs.filter((favId:string) => favId !== id);
            setFavorite(false)
        } else {
            favs.push(id);
            setFavorite(true)
        }
        localStorage.setItem("favorites", JSON.stringify(favs));
    }

    if (!movie) return <p>Loading...</p>

    return (
        <Container>
            <HomeButton to="/">
                Back to Search
            </HomeButton>
            <MovieDetailCard movie={movie} isFavourite={isFavorite} toggleFavourite={toggleFavorite}></MovieDetailCard>
        </Container>
    );
}

export default MovieDetail;

const Container = styled.div`
    max-width: 900px;
    margin: 50px auto;
    padding: 20px;
`


