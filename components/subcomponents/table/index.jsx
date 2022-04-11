import styled from "styled-components";
import { SpaceBetween } from "../../../styles/layout.styled";
import Modal from "../modal";

function Table({ data = [] }) {
    return (
        <>
            {data.map((el, i) => (
                <Modal bond={el} key={i}>
                    <BorderedItem row i={i}>
                        <div>
                            {el.name}
                        </div>
                        <div>
                            {el.maturity.toLowerCase() === "postdrip" ? (
                                <StyledText href="#">{el.maturity}</StyledText>
                            ) : (
                                <span>{el.maturity}</span>
                            )}
                        </div>
                    </BorderedItem>
                </Modal>
            ))}
        </>
    )
}

const BorderedItem = styled(SpaceBetween)`
    padding: ${({ i }) => i !== 0 ? "1rem 0.5rem" : "0.5rem 0.5rem 1rem 0.5rem"};
    border-top: ${({ i }) => i !== 0 ? `2px solid white` : 'none'}
`;

const StyledText = styled.span`
    color: #ffabfc;
    transition: 1s;
    &:hover {
        text-decoration: underline #40e4ca;
    }
`;

export default Table;