import styled from "styled-components";
import {Link} from "react-router-dom";

const FavouritesButton = styled(Link)`
    margin: 10px auto;
    padding: 10px 20px;
    font-size: 14px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    color: #000;
    border: 1px solid #ccc;
    background-color: #f8f8f8;
    width: fit-content;
    border-radius: 4px;
    &:hover {
        background-color: #eaeaea;
    }
`

export default FavouritesButton;