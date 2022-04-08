import { useState } from "react";
import styled from "styled-components";
import { Pie } from "react-chartjs-2";
import {Chart, ArcElement, Tooltip} from 'chart.js'
Chart.register([ArcElement, Tooltip]);

function PieChart(){
    const data = {
        labels: [
          'Red',
          'Blue',
          'Yellow'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [300, 50, 100],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
        }]
      };
    
    const options = {
        
    }

    return (
        <ChartWrapper>
            <Pie
                data={data}
                options={options}
            />
        </ChartWrapper>
    )
}

const ChartWrapper = styled.div`
    padding: 1rem;
`;

export default PieChart;