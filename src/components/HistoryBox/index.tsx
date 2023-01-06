import React from 'react';
import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    CartesianGrid,
    Tooltip,
    YAxis
} from 'recharts';

import { 
    Container, 
    ChartContainer,
    Header,
    LegendContainer,
    Legend
} from './styles';

import formatCurrency from '../../utils/formatCurrency';

interface IHistoryBoxProps {
    data: {
        month: string;
        amountEntry: number;
        amountOutput: number;
    }[],
    lineColorAmountEntry: string;
    lineColorAmountOutput: string;
}

const HistoryBox: React.FC<IHistoryBoxProps> = ({
    data, lineColorAmountEntry, lineColorAmountOutput
}) => (
    <Container>
        <LegendContainer>
            <Header>
                <h2>Histórico de saldo</h2>
            </Header>
            <Legend color={lineColorAmountEntry}>
                <div></div>
                <span>Entradas</span>
            </Legend>
            <Legend color={lineColorAmountOutput}>
                <div></div>
                <span>Saídas</span>
            </Legend>
        </LegendContainer>

        <ChartContainer>
            <ResponsiveContainer>
                <LineChart data={data} margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="0.5 0.5" stroke="#cecece"/>
                    <XAxis dataKey="month" stroke="#cecece" />
                    <YAxis />
                    <Tooltip formatter={(value) => formatCurrency(Number(value))}/>
                    <Line 
                        type="monotone"
                        dataKey="amountEntry"
                        name="Entradas"
                        stroke={lineColorAmountEntry}
                        strokeWidth={5}
                        dot={{r: 2}}
                        activeDot={{ r: 8 }}
                    />
                    <Line 
                        type="monotone"
                        dataKey="amountOutput"
                        name="Saídas"
                        stroke={lineColorAmountOutput}
                        strokeWidth={5}
                        dot={{r: 2}}
                        activeDot={{ r: 8 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </ChartContainer>
    </Container>
);

export default HistoryBox;