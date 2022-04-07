import styled from "styled-components";

export const MarginAround = styled.div`
    margin: ${(props) => props.xl ? "3rem" : 
        props.lg ? "2rem" : "1rem"};
`;