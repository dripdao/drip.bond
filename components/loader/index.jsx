import styled from 'styled-components';
import { rotate, pulse, loaderPulse } from '../../styles/animations';

function Loader(){
    return (
        <Wrapper>
            <DashedBorder />
        </Wrapper>
    )
}

const DashedBorder = styled.div`
    height: 180px;
    width: 180px;
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='100' ry='100' stroke='yellow' stroke-width='10' stroke-dasharray='29%25%2c 10%25' stroke-dashoffset='50' stroke-linecap='butt'/%3e%3c/svg%3e");
    border-radius: 50%;
    animation: ${rotate} 2s linear infinite;
`;

const Wrapper = styled.div`
    width: 180px;
    height: 180px;
    background: url('/logo/logo-only.png') center no-repeat;
    background-size:60%;
    animation: ${loaderPulse} 2s linear infinite;
`;

export default Loader;