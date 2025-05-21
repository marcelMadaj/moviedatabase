import styled from "styled-components";

interface PaginationProps {
    totalPages: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage, onPageChange }) => {
    if (totalPages <= 1) return null;

    return (
        <PaginationWrapper>
            {[...Array(totalPages)].map((_,index)=> (
                <Page key={index} onClick={() => onPageChange(index + 1)} active={index + 1 === currentPage}>{index+1}</Page>
            ))}
        </PaginationWrapper>
    );
};

export default Pagination;


const PaginationWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 20px;
`

const Page = styled.button<{ active?: boolean }>`
    padding: 8px 10px;
    color:${(props)=> props.active ? "#fff" : "#000"}
    border: none;
    cursor: pointer;
    border-radius: 4px;
    background-color: ${(props)=> props.active ? "#007bff": '#eee'};
`