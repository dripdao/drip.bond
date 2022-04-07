import styled from "styled-components";
import { SpaceBetween } from "../../styles/layout.styled";

function Table() {
    const mock = [
        "Dripbond #1",
        "Dripbond #2",
        "Dripbond #3",
        "Dripbond #4",
        "Dripbond #5",
        "Dripbond #6",
        "Dripbond #7",
        "Dripbond #8",
        "Dripbond #9"
    ]
    return (
        <>
            {mock.map((el) => (
                <SpaceBetween row style={{padding: "0 0.5rem"}}>
                    <div>
                        {el}
                    </div>
                    <div>
                        Active
                    </div>
                </SpaceBetween>
            ))}
        </>
    )
}

export default Table;