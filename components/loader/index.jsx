import Image from 'next/image'
import styled from 'styled-components';
import { rotate } from '../../styles/animations';

function Loader(){
    return (
        <DashedBorder>
            <BorderSpacing>
                <Image 
                    src="/logo/logo-only.png"
                    alt="Logo"
                    height="120px"
                    width="120px"
                />
            </BorderSpacing>
        </DashedBorder>
    )
}

const BorderSpacing = styled.div`
    border-radius: 50%;
    padding: 20px;
`;

const DashedBorder = styled.div`
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='100' ry='100' stroke='yellow' stroke-width='10' stroke-dasharray='29%25%2c 10%25' stroke-dashoffset='50' stroke-linecap='butt'/%3e%3c/svg%3e");
    border-radius: 50%;
    animation: ${rotate} 2s linear infinite;
`;

export default Loader;