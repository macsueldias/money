import React from 'react'

import { Container, Tag } from './styles';

interface HistoryFinanceCardProps {
    cardColor: string;
    tagColor: string;
    title: string;
    subtitle: string;
    amount: string;
}

const HistoryFinanceCard: React.FC<HistoryFinanceCardProps> = ({
    tagColor,
    title,
    subtitle,
    amount
}) =>  (
        <Container>
            <Tag color={tagColor} />
            <div>
                <span>{title}</span>
                <small>{subtitle}</small>
            </div>
            <h3>{amount}</h3>
        </Container>
    );

export default HistoryFinanceCard