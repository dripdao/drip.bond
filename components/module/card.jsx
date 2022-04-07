import styled from "styled-components";

function Card({ children }){
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding: 1rem;
    background-color: #424242;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border-radius: 10px;
    box-shadow: 5px 5px 10px 5px rgba(0,0,0,0.25);
`;

export default Card;