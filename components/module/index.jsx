import { useState } from "react";
import styled from "styled-components";
import { useAccountContext } from "../../store/account";
import { MarginAround } from "../../styles/spacing.styled";
import Stat from "../stat";
import Button from "./button";
import Card from "./card";
import Input from "./input";

function Module(){
    const [inputVal, setInputVal] = useState(0);
    const { web3Provider } = useAccountContext();

    const handleSubmit = () => {
        console.log("Submit");
    }

    const shouldDisable = () => {
        if(!inputVal || inputVal <= 0){
            return true;
        } else {
            return false
        }
    }

    return (
        <Wrapper>
            <Card>
                <StatContainer>
                    <Stat text="renBTC/ETH" value="12.94" />
                    <Stat text="renCRV APY" value="12" />
                </StatContainer>

                <MarginAround>
                    <p>Deposit BTC</p>
                    <Input 
                        value={inputVal}
                        onChange={setInputVal}
                        disabled={!web3Provider}
                    />
                    <Button 
                        text="Enter DRIP" 
                        onClick={handleSubmit} 
                        disabled={shouldDisable() || !web3Provider}
                    />
                </MarginAround>
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