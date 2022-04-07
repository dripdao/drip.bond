import styled from "styled-components";

export const FullScreenCenter = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const ColumnCenter = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;

    justify-content: ${({verticalCenter}) => verticalCenter ? "center" : "inherit"};
    ${({maxH}) => maxH && "height: 100vh"};
    ${({alignCenter}) => alignCenter && "align-items: center"};
`;

export const SpaceBetween = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: ${({row}) => row ? "row" : "column"}
`;