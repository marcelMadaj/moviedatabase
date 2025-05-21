import styled from "styled-components";
import SearchButton from "../atoms/SearchButton";
import {Star} from "lucide-react";
import FavouritesButton from "../atoms/FavouritesButton";

interface SearchHeaderProps {
    query: string;
    onQueryChange : (value:string) => void
    onSearch: () => void;
}

const SearchHeader: React.FC<SearchHeaderProps> = ({query, onQueryChange, onSearch }) => {


    return (
        <SearchHeaderWrapper>
            <h1>Film Database</h1>
            <SearchInput type="text" placeholder='Type film' value={query} onChange={(e) => onQueryChange(e.target.value)}/>
            <SearchButton onClick={onSearch}>Search</SearchButton>
            <FavouritesButton to="/favorites">
                Favourites Movies
                <Star size={16} />
            </FavouritesButton>
        </SearchHeaderWrapper>
    );
};

export default SearchHeader;


const SearchHeaderWrapper = styled.div`
    text-align: center;
    margin-bottom: 20px;
`

const SearchInput = styled.input`
    padding: 10px;
    width: 60%;
    font-size: 14px;
    margin-right: 8px;
    max-width: 400px;
`