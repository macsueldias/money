import styled, { keyframes } from 'styled-components';

interface ILengendProps {
    color: string;
}

const animate = keyframes`
    0% {
        transform: translate(100px);
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
   width: 48%;
   min-height: 260px;
   
   margin: 10px 0;

   background-color: ${props => props.theme.colors.tertiary};
   color: ${props => props.theme.colors.white};

   border-radius: 7px;

   display: flex;

   animation: ${animate} 2s ease-in;

    @media (max-width: 1200px) {
        display: flex;
        flex-direction: column;

        width: 100%;
        height: auto;
    }
`;

export const LegendContainer = styled.ul `
    list-style: none;

    height: 175px;
    padding-right: 16px;

    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${props => props.theme.colors.secondary};
        border-radius: 10px;
    }

    ::-webkit-scrollbar-track {
        background-color: ${props => props.theme.colors.tertiary};
    }

    @media (max-width: 770px) {
        display: flex;
    }
`;

export const Legend = styled.li<ILengendProps> `
    display: flex;
    align-items: center;

    margin-bottom: 7px;
    padding-right: 12px;
    
    > div {
        background-color: ${props => props.color};
        
        width: 45px;
        height: 45px;
        border-radius: 5px;
        
        font-size: 14px;
        font-weight: 700;
        line-height: 40px;
        text-align: center;
    }

    > span {
        margin-left: 5px;
        font-weight: 700;
    }

    @media (max-width: 1200px) {
        > div {
            width: 30px;
            height: 30px;

            font-size: 10px;
            line-height: 30px;

            text-align: center;
        }
    }
`;

export const SideLeft = styled.aside`
    flex: 1;
    padding: 30px 20px;
    
    > h2 {
        margin-bottom: 10px;
        padding-left: 20px;
    }

`;

export const SideRight = styled.main`
    flex: 1;
    min-height: 150px;
    display: flex;
    justify-content: center;
    padding-top: 35px;
`;
