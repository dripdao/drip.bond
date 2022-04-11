import styled from "styled-components";

function CtaButton({ onClick, disabled, text, sm }){
    return (
        <StyledButton 
            onClick={onClick}
            disabled={disabled}
            sm={sm}
        >
            {text || 'Submit'}
        </StyledButton>
    )
}

const StyledButton = styled.button`
    margin: 1rem 0;
    width: 100%;
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

    ${({ sm }) => sm ? `
        max-width: 200px;
        margin: 0.5rem 0;
        height: fit-content;
    ` : `
        max-width: 300px;
        margin: 1rem 0;
    `}

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

export default CtaButton;