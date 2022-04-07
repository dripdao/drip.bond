import { useEffect, useState } from "react";
import styled from "styled-components"

function Input({ value, onChange, disabled }){
    const [isInvalid, setIsInvalid] = useState(true);

    useEffect(() => {
        if(value > 0){
            setIsInvalid(false);
        } else {
            setIsInvalid(true);
        }
    }, [value])

    return (
        <Wrapper>
            <StyledInput 
                placeholder={0}
                type="number"
                value={value} 
                onChange={(e) => onChange(e.target.value)} 
                disabled={disabled}
                isInvalid={isInvalid}
            />
        </Wrapper>
    )
}

const Wrapper = styled.div`

`;

const StyledInput = styled.input`
    width: 100%;
    max-width: 300px;
    text-align: right;
    padding: 0.75rem 1rem;
    border: none;
    border-radius: 10px;
    font-size: 20px;
    &:focus-visible {
        outline: #ffabfc auto 2px;
    }
    color: ${({isInvalid}) => isInvalid ? "darkgray" : "black"};
`;

export default Input;