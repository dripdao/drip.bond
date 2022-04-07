import styled from "styled-components";

function Stat({ value, text }){
    return (
        <Wrapper>
            <div>
                <Value>
                    {value}
                    {text.includes("APY") && "%"}
                </Value>
            </div>
            <div>
                <Text>
                    {text}
                </Text>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div``;

const Value = styled.span`
    font-size: 30px;
    -webkit-text-stroke: 1px black;
    color: #ffdc64;
    text-shadow:
        3px 3px 0 #000,
      -1px -1px 0 #000,  
       1px -1px 0 #000,
       -1px 1px 0 #000,
        1px 1px 0 #000;
`;

const Text = styled.span`

`;

export default Stat;