import styled from "styled-components";

function Button({ onClick, disabled, text }){
    return (
        <StyledButton 
            onClick={onClick}
            disabled={disabled}
        >
            {text || 'Submit'}
        </StyledButton>
    )
}

const StyledButton = styled.button`
    margin: 1rem 0;
    width: 100%;
    max-width: 300px;
    font-size: 20px;
    padding: 0.75rem;
    border: none;
    font-weight: bold;
    color: #fff;
    cursor: pointer;
    text-align:center;
    background-size: 300% 100%;
    text-transform: uppercase;
    border-radius: 50px;
    moz-transition: all .4s ease-in-out;
    -o-transition: all .4s ease-in-out;
    -webkit-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;
    background-image: linear-gradient(to right, #25aae1, #40e4ca, #ffabfc, #b346ff);
    -webkit-text-stroke: 1px black;
    color: white;
    text-shadow:
        2px 2px 0 #000,
      -1px -1px 0 #000,  
       1px -1px 0 #000,
       -1px 1px 0 #000,
        1px 1px 0 #000;

    &:hover {
        ${({disabled}) => !disabled ? `
            background-position: 100% 0;
            moz-transition: all .4s ease-in-out;
            -o-transition: all .4s ease-in-out;
            -webkit-transition: all .4s ease-in-out;
            transition: all .4s ease-in-out;` 
            :
            `cursor: not-allowed`
        };
    }

    &:focus {
        outline: none;
    }
`;

export default Button;