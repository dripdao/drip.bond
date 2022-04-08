import { useState } from "react";
import { MarginTop } from "../../styles/layout.styled";
import { HalfTopPaddingText } from "../../styles/typography.styled";
import CtaButton from "../buttons/cta";
import NumberInput from "../inputs/number";
import { useAccountContext } from "../../store/account";
import Card from "./card";
import Table from "../table";

function Deposit() {
    const { web3Provider } = useAccountContext();
    const [inputVal, setInputVal] = useState(0);

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
            <MarginTop>
                <HalfTopPaddingText>Deposit BTC</HalfTopPaddingText>
                <NumberInput 
                    value={inputVal}
                    onChange={setInputVal}
                    disabled={!web3Provider}
                />
                <CtaButton 
                    text="Enter DRIP" 
                    onClick={handleSubmit} 
                    disabled={shouldDisable() || !web3Provider}
                />
            </MarginTop>

            {mock.length > 0 && web3Provider && (
                <div>
                    <HalfTopPaddingText>Active DRIPBONDs</HalfTopPaddingText>
                    <Card 
                        inset 
                        style={{
                            maxHeight: "200px", 
                            overflowY: "scroll"
                        }}
                    >
                        <Table data={mock} />
                    </Card>
                </div>
            )}
        </>
    )
}

export default Deposit;