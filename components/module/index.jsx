import styled from "styled-components";
// Store
import { useNavContext } from "../../store/navigation";
import { usePricesContext } from "../../store/prices";
// View
import DepositView from "./deposit";
import ChartView from "./chart";
// Subcomponents
import Card from "../subcomponents/card";
import Tabs from "../subcomponents/tabs";
import Stat from "../subcomponents/stat";

function Module(){
    const { current } = useNavContext();
    const { prices } = usePricesContext();
    console.log(prices)
    return (
        <Wrapper>
            <Card>
                <StatContainer>
                    <Stat text="renBTC/ETH" value={prices.renBtcEth || 0} />
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