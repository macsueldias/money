import React from 'react';
import {
    ResponsiveContainer, 
    BarChart,
    Bar,
    Cell,
    Tooltip,
} from 'recharts';
import formatCurrency from '../../utils/formatCurrency';

import { 
    Container,
    SideRight,
    SideLeft,
    LegendContainer,
    Legend
} from './styles';

interface IBarchartProps {
    title: string;
    data: {
        name: string;
        amount: number;
        percent: number;
        color: string;
    }[],
}

const BarChartBox: React.FC<IBarchartProps> = ({
    title, data
}) => (
        <Container>
            <SideLeft>
                <h2>{title}</h2>
                <LegendContainer>
                    {
                        data.map((indicator) => (
                            <Legend 
                                key={indicator.name}
                                color={indicator.color}>
                                    <div>{indicator.percent}%</div>
                                    <span>{indicator.name}</span>
                                </Legend>
                        ))
                    }
                </LegendContainer>
            </SideLeft>
            <SideRight>
                <ResponsiveContainer>
                    <BarChart data={data}>
                        <Bar dataKey='amount'  name='valor'>
                            {
                                data.map((indicator) => (
                                    <Cell 
                                    key={indicator.name}
                                    fill={indicator.color}
                                    cursor="pointer"
                                    />
                                    ))
                                }
                        </Bar>
                        <Tooltip 
                            cursor={{fill: 'none'}} 
                            formatter={(value) => formatCurrency(Number(value))}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </SideRight>
        </Container>
    );

export default BarChartBox;