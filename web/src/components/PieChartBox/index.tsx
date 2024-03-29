import React from 'react'
import { PieChart, Pie, ResponsiveContainer, Cell } from 'recharts'

import {
  Container,
  SideLeft,
  LegendContainer,
  Legend,
  SideRight,
} from './styles'

interface IPieChartProps {
  data: {
    name: string
    value: number
    percent: number
    color: string
  }[]
}

const PieChartBox: React.FC<IPieChartProps> = ({ data }) => (
  <Container>
    <SideLeft>
      <h2>Relação</h2>
      <LegendContainer>
        {data.map((indicator) => (
          <Legend key={indicator.name} color={indicator.color}>
            <span></span>
            <div>{indicator.percent}%</div>
            <span>{indicator.name}</span>
          </Legend>
        ))}
      </LegendContainer>
    </SideLeft>
    <SideRight>
      <ResponsiveContainer>
        <PieChart width={400} height={400}>
          <Pie data={data} dataKey="percent">
            {data.map((indicator) => (
              <Cell key={indicator.name} fill={indicator.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </SideRight>
  </Container>
)

export default PieChartBox
