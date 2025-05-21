import styled from "styled-components";
import {Star} from "lucide-react";

interface MovieDetailCardProps {
    movie:{
        Title: string;
        Year: string;
        Poster: string;
        Genre: string;
        Actors: string;
        Director: string;
    }
    isFavourite: boolean;
    toggleFavourite: () => void;
}

const MovieDetailCard: React.FC<MovieDetailCardProps> = ({ movie, isFavourite, toggleFavourite }) => {
    return (
        <Card>
            <Poster src={movie?.Poster} alt={movie?.Title}/>
            <Details>
                <Header>
                    <Title>{movie?.Title}</Title>
                    <FavButton onClick={toggleFavourite} $active={isFavourite}>
                        <Star size={24} fill={isFavourite ? "#fbca50" : "none"} stroke={isFavourite ? "#fbca50" : "#555" }/>
                    </FavButton>
                </Header>
            </Details>
            <Info>Year: {movie?.Year}</Info>
            <Info>Genre: {movie?.Genre}</Info>
            <Info>Actors: {movie?.Actors}</Info>
            <Info>Director: {movie?.Director}</Info>
        </Card>
    );
};

export default MovieDetailCard;


const Card = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #f8f9fa;
    border: 10px;
    box-shadow: 0 4px 16px 0 rgba(0,0,0,0.1);
    overflow: hidden;
    padding: 20px;
    margin-top: 20px;
`

const Poster = styled.img`
    width: 100%;
    max-width: 300px;
    object-fit: cover;
`

const Details = styled.div`
    padding: 20px;
    flex: 1;
`

const Title = styled.h1`
    font-size: 24px;
    margin-bottom: 15px;
`

const Info = styled.p`
font-size: 16px;
    margin: 8px 0;
`

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const FavButton = styled.button<{ $active?: boolean }>`
    border: none;
    background: none;
    cursor: pointer;
    padding: 0;
    svg{
        stroke:${(props)=> (props.$active ? "#fbca50" : "#555")}
    }
`
