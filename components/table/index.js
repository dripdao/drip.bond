import styled from "styled-components";
import { SpaceBetween } from "../../styles/layout.styled";
import Modal from "../modal";

function Table() {
    const mock = [
        {
            name: "Bond #1",
            maturity: "POSTDRIP"
        },
        {
            name: "Bond #2",
            maturity: "08-21-22"
        },
        {
            name: "Bond #3",
            maturity: "09-03-23"
        },
        {
            name: "Bond #4",
            maturity: "05-14-24"
        },
        {
            name: "Bond #5",
            maturity: "12-30-23"
        }
    ];

    return (
        <>
            {mock.map((el, i) => (
                <BorderedItem row i={i}>
                    <div>
                        <Modal bond={el}>
                            {el.name}
                        </Modal>
                    </div>
                    <div>
                        {el.maturity.toLowerCase() === "postdrip" ? (
                            <Modal bond={el}>
                                <StyledText href="#">{el.maturity}</StyledText>
                            </Modal>
                        ) : (
                            <span>{el.maturity}</span>
                        )}
                    </div>
                </BorderedItem>
            ))}
        </>
    )
}

const BorderedItem = styled(SpaceBetween)`
    padding: 1rem 0.5rem;
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