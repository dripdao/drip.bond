import styled from "styled-components";
import { useNavContext } from "../../store/navigation";
import { GridSplit, SpaceAround } from "../../styles/layout.styled";

function Tabs({ items = ["Deposit", "Chart"] }) {
    const { current, setCurrent } = useNavContext();

    return (
        <GridSplit>
            {items.map(item => (
                <TabWrapper 
                    onClick={() => setCurrent(item)}
                    current={current}
                    item={item}
                    key={item}
                > 
                    <span>{item}</span>
                </TabWrapper>
            ))}
        </GridSplit>
    )
}

const TabWrapper = styled.div`
    color: ${({current, item}) => current === item ? "#ffdc64" : "inherit"};
`;

export default Tabs;