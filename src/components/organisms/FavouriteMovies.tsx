import {useEffect, useState} from "react";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import HomeButton from "../atoms/HomeButton";
import FavouriteMovieGrid from "../molecules/FavouriteMovieGrid";


interface FavouriteMovieData{
    Title: string;
    Year: string;
    Poster: string;
    imdbID: string;
}

const FavouriteMovies: React.FC = () => {
    const navigate = useNavigate();
    const [favourites, setFavourites] = useState<FavouriteMovieData[]>([])
    useEffect(() => {
        const favIds: string[] = JSON.parse(localStorage.getItem("favorites") || "[]");
        Promise.all(favIds.map(async (id) => {
                const res = await fetch(`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&i=${id}`);
                return res.json();
            })
        ).then(setFavourites)

    }, []);

    const handleClickToDetail = (id:string) => {
        navigate(`/detail/${id}`);
    }

    return (
        <Container>
            <HomeButton to="/">
                Back to Search
            </HomeButton>
            <h1>Favourite Movies</h1>
            {favourites.length === 0 ?
                <p>No favourite movies</p>
                    :
                <FavouriteMovieGrid favourites={favourites} onSelect={handleClickToDetail}/>
            }
        </Container>
    )
}

export default FavouriteMovies;

const Container = styled.div`
    max-width: 900px;
    margin: 40px auto;
    padding: 20px;
`


