import styled from "styled-components";
import { useNavContext } from "../../store/navigation";
import Stat from "../stat";
import Card from "./card";
import Tabs from "../tabs";
import ChartView from "./chart";
import DepositView from "./deposit";

function Module(){
    const { current } = useNavContext();

    return (
        <Wrapper>
            <Card>
                <StatContainer>
                    <Stat text="renBTC/ETH" value="12.94" />
                    <Stat text="renCRV APY" value="12" />
                </StatContainer>

                {current === "Deposit" ? (
                    <DepositView />
                ) : (
                    <ChartView />
                )}

                <Tabs />
            </Card>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    max-width: 500px;
    width: 90vw;
`;

const StatContainer = styled.div`
    display: flex;
    justify-content: space-around;
`;

export default Module;