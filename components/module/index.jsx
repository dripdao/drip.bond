import styled from "styled-components";
import Card from "./card";
import Input from "./input";

function Module(){
    return (
        <Wrapper>
            <Card>
                <Input />
            </Card>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    max-width: 500px;
    width: 90vw;
`;

export default Module;