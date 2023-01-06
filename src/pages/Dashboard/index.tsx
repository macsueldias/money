import React, { useState, useMemo, useCallback } from 'react';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import listOfMonths from '../../utils/months';

import expenses from '../../repositories/expenses';
import gains from '../../repositories/gains';
import WalletBox from '../../components/WalletBox';
import MessageBox from '../../components/MessageBox';
import PieChartBox from '../../components/PieChartBox';
import HistoryBox from '../../components/HistoryBox';
import BarChartBox from '../../components/BarChartBox';

import happyImg from '../../assets/happy.svg';
import sadImg from '../../assets/sadImg.svg';


import {
    Container,
    Content
 } from './styles';


const Dashboard: React.FC = () => {
    const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth() + 1);
    const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear());
    

    const years = useMemo(() => { 

        let uniqueYears: number[] = [];
        [...expenses, ...gains].forEach(item => {
            const year = Number(item.date.split('-', 1))
            
            if(!uniqueYears.includes(year))
                uniqueYears.push(year)
                setYearSelected(year)
        });

        return uniqueYears.map(year => {
            return {
                value: year,
                label: year,
            }
        });
    },[]);


    const months = useMemo(() => {   
        return listOfMonths.map((month, index) => {
            return {
                value: index + 1,
                label: month,
            }
        })
        
    },[]);

    const totalExpenses = useMemo(() => {
        let total: number = 0;
        
        expenses.forEach(item => {
            const date = new Date(item.date);
            const year = date.getFullYear();
            const month = date.getMonth() + 1;
            if(month === monthSelected && year === yearSelected) {
                try {
                    total += Number(item.amount)
                }catch {
                    throw new Error('Invalid amount must be number.')
                }
            }
        });
        return total;
    }, [monthSelected, yearSelected]);

    const totalGains = useMemo(() => {
        let total: number = 0;
        
        gains.forEach(item => {
            const date = new Date(item.date);
            const year = date.getFullYear();
            const month = date.getMonth() + 1;
            if(month === monthSelected && year === yearSelected) {
                try {
                    total += Number(item.amount)
                }catch {
                    throw new Error('Invalid amount must be number.')
                }
            }
        });
        return total;
    }, [monthSelected, yearSelected]);

    const totalBalance = useMemo(() => {
        return totalGains - totalExpenses;
    },[totalExpenses, totalGains]);

    const message = useMemo(() => {
        if(totalBalance > 0) {
            return {
                title: "Muito bem!",
                description: "Sua carteira está positiva!",
                footerText:"Continue assim.",
                icon: happyImg

                
            }
        }else if(totalGains === 0 && totalExpenses === 0) {
            return {
                title: "Op's!",
                description: "Não houve registro este mês",
                footerText:"Não foi feito nenhum registro neste mês e ano.",
                icon: sadImg
            }
        }else if(totalBalance > (-100) && totalBalance <= 0) {
            return {
                title: "Atenção!",
                description: "Seus gastou estão altos!",
                footerText:"Tente poupar o seu dinheiro.",
                icon: sadImg
            }
        }else{
            return {
                title: "Que triste!",
                description: "Neste mês, você gastou mais do que deveria!",
                footerText: "Elimine os gastos desnecessários.",
                icon: sadImg
            }
        }
    }, [totalBalance]);

    const relationExpensesVersusGains = useMemo(() => {
        const total = totalGains + totalExpenses;
        
        const percentGains = Number((100 * (totalGains / total)).toFixed(1));
        const percentExpenses = Number((100 * (totalExpenses / total)).toFixed(1));

        const data = [
            {
                name: "Saídas",
                value: totalExpenses,
                percent: percentGains ? percentGains : 0,
                color: '#FF6961'
            },
            {
                name: "Entradas",
                value: totalGains,
                percent: percentExpenses ? percentExpenses : 0,
                color: '#F7931B'
            }
        ];

        return data; 

    },[totalGains, totalExpenses]);

    const historyData = useMemo(() => {
        return listOfMonths.map((_, month) => {
                let amountEntry = 0;
                gains.forEach(gain => {
                    const date = new Date(gain.date);
                    const gainMonth = date.getMonth();
                    const gainYear = date.getFullYear();

                    if(gainMonth === month && gainYear === yearSelected) {
                        try{
                            amountEntry += Number(gain.amount);
                        } catch {
                            throw new Error('AmountEntry is invalid. AmountEntry must be valid number.')
                        }
                    }
                });
                
                let amountOutput = 0;
                expenses.forEach(expense => {
                    const date = new Date(expense.date);
                    const expenseMonth = date.getMonth();
                    const expenseYear = date.getFullYear();

                    if(expenseMonth === month && expenseYear === yearSelected) {
                        try{
                            amountOutput += Number(expense.amount);
                        } catch {
                            throw new Error('AmountOutput is invalid. AmountOutput must be valid number.')
                        }
                    }
                });  

                return {
                    monthNumber: month,
                    month: listOfMonths[month].substr(0, 3),
                    amountEntry,
                    amountOutput
                }
            }).filter(item => {
                const currentMonth = new Date().getMonth();
                const currentYear = new Date().getFullYear();

                return (yearSelected === currentYear && item.monthNumber <= currentMonth) || (yearSelected < currentYear)
                
            })
            
    },[yearSelected]);

    const relationExpensevesRecurrentVersusEventual = useMemo(() => {
        let amountRecurrent = 0;
        let amountEventual = 0;

        expenses
        .filter((expense) => {
            const date = new Date(expense.date);
            const year = date.getFullYear();
            const month = date.getMonth();

            return month === monthSelected && year === yearSelected;
        })
        .forEach((expense) => {
            if(expense.frequency === 'recorrente') {
                return amountRecurrent += Number(expense.amount)
            }
            
            if(expense.frequency === 'eventual') {
                return amountEventual += Number(expense.amount)
            }
        });

        const total = amountRecurrent + amountEventual;

        const recurrentPercent = Number(((amountRecurrent / total) * 100).toFixed(1));
        const eventualPercent = Number(((amountRecurrent / total) * 100).toFixed(1));

        return [
            {
                name: 'Recorrentes',
                amount: amountRecurrent,
                percent: recurrentPercent ? recurrentPercent : 0,
                color:'#F7931B'
            },
            {
                name: 'Eventuais',
                amount: amountEventual,
                percent: eventualPercent ? eventualPercent : 0,
                color:'#E44C4E'
            }
        ];

    }, [monthSelected, yearSelected]);

    const relationGainsRecurrentVersusEventual = useMemo(() => {
        let amountRecurrent = 0;
        let amountEventual = 0;

        gains
        .filter((gain) => {
            const date = new Date(gain.date);
            const year = date.getFullYear();
            const month = date.getMonth();

            return month === monthSelected && year === yearSelected;
        })
        .forEach((gain) => {
            if(gain.frequency === 'recorrente') {
                return amountRecurrent += Number(gain.amount)
            }
            
            if(gain.frequency === 'eventual') {
                return amountEventual += Number(gain.amount)
            }
        });

        const total = amountRecurrent + amountEventual;

        const percentRecurrent = Number(((amountRecurrent / total) * 100).toFixed(1));
        const percentEventual = Number(((amountEventual / total) * 100).toFixed(1));

        return [
            {
                name: 'Recorrentes',
                amount: amountRecurrent,
                percent: percentRecurrent ? percentRecurrent : 0,
                color:'#F7931B'
            },
            {
                name: 'Eventuais',
                amount: amountEventual,
                percent: percentEventual ? percentEventual : 0,
                color:'#E44C4E'
            }
        ];

    }, [monthSelected, yearSelected]);

    const handleMonthSelected = useCallback((month: string) => {
        
        try {
            const parseMonth = Number(month);
            setMonthSelected(parseMonth)
        }
        catch{
            throw new Error('invalid month value. Is accept 0 - 11')
        }
    }, []);
    
    const handleYearSelected = useCallback((year: string) => {
        
        try {
            const parseYear = Number(year);
            setYearSelected(parseYear)
        }
        catch {
            throw new Error('invalid year value. Is accept 0 - 11')
        }
    },[]);

    console.log(relationExpensevesRecurrentVersusEventual)

    return (
        <Container>
            <ContentHeader title='Dashboard' lineColor='#F7931B'>
            <SelectInput 
                    options={months}  
                    onChange={(e) => 
                    handleMonthSelected(e.target.value)} 
                    defaultValue={monthSelected}
                />
                <SelectInput 
                    options={years} 
                    onChange={(e) => handleYearSelected(e.target.value)} 
                    defaultValue={yearSelected}
                />
            </ContentHeader>
            <Content>
                <WalletBox
                    title="Saldo"
                    color="#4e41f0"
                    amount={totalBalance}
                    footerlabel={"atualizado com base nas entradas e saídas"}
                    icon="dolar"
                />
                <WalletBox
                    title="Entradas"
                    color="#F7931B"
                    amount={totalGains}
                    footerlabel={"atualizado com base nas entradas e saídas"}
                    icon="arrowUp"
                />
                <WalletBox
                    title="Saídas"
                    color="#E44C4E"
                    amount={totalExpenses}
                    footerlabel={"atualizado com base nas entradas e saídas"}
                    icon="arrowDown"
                />
                <MessageBox 
                    title= {message.title}
                    description = {message.description}
                    footerText = {message.footerText}
                    icon = {message.icon}
                />
                <PieChartBox data={relationExpensesVersusGains} />
                <HistoryBox 
                    data={historyData}
                    lineColorAmountEntry='#F7931B'
                    lineColorAmountOutput='#E44C4E'
                />
                <BarChartBox 
                    title='Saídas'
                    data={relationExpensevesRecurrentVersusEventual}
                />
                <BarChartBox 
                    title='Entradas'
                    data={relationGainsRecurrentVersusEventual}
                />
            </Content>
        </Container>
    )
}

export default Dashboard;