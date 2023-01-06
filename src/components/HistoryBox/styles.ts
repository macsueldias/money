import styled, { keyframes } from 'styled-components';

interface ILengendProps {
    color: string;
}

const animate = keyframes`
    0% {
        transform: translate(-100px);
        opacity: 0;
    }
    50% {
        opacity: .3;
    }
    100% {
        transform: translate(0px);
        opacity: 1;
    }
`;

export const Container = styled.div`
    width: 100%;

    background-color: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.white};

    margin: 10px 0;
    padding: 30px 20px;

    border-radius: 7px;

    animation: ${animate} 3s ease-in;

    @media (max-width: 770px) {
        padding: 30px 8px;
    }
`;

export const ChartContainer = styled.div`
    height: 250px;
    padding-top: 20px;
`;

export const Header = styled.header`
    width: 100%;
    
    display: flex;
    justify-content: space-between;

    > h2 {
        margin-bottom: 20px;
        padding-left: 20px;
    }

    @media(max-width: 1280px) {
        flex-direction: column;
    }
`;

export const LegendContainer = styled.ul`
    display: flex;
    list-style: none;
    
    @media(max-width: 580px) {
        flex-direction: column;
    }
`;

export const Legend = styled.li<ILengendProps>`
    display: flex;
    align-items: center;

    margin-bottom: 7px;
    margin-left: 20px;
    
    > div {
        background-color: ${props => props.color};
        
        width: 10px;
        height: 10px;
        border-radius:5px;
        
        font-size: 12px;
        line-height: 40px;
        text-align: center;
    }

    > span {
        margin-left: 5px;
        font-size: 14px;
    }

    @media(max-width: 1280px) {
        > div {
            width: 20px;
            height: 20px;

            font-size: 10px;
            line-height: 20px;
        }
    }
`;