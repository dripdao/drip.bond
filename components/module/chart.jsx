import { useState } from "react";
import styled from "styled-components";
import { ColumnCenter } from "../../styles/layout.styled";
import PieChart from "../charts/pie";
import Stat from "../stat";

function ChartView(){
    return (
        <ColumnCenter>
            <Stat text="Total Volume ($)" value="58M" />
            <Constrained>
                <PieChart />
            </Constrained>
        </ColumnCenter>
    )
}

const Constrained = styled.div`
    max-width: 500px;
    margin: 0 auto;
`;

export default ChartView;