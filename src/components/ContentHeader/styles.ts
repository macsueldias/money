import styled from 'styled-components';

interface TitleContainerProps {
    lineColor: string;
}

export const Container = styled.div`
    width: 100%;
    height: 60px;
    display: flex;

    justify-content: space-between;
    align-items: center;

    margin-bottom: 25px;
`;

export const TitleContainer = styled.div<TitleContainerProps>`

    > h1 {
        color: ${props => props.theme.colors.white};
    }

    &::after {
        content: '';
        display: block;
        width: 55px;
        border-bottom: 10px solid ${props => props.lineColor}
    }

    @media (max-width: 600px) {
        > h1 {
            font-size: 1.4rem;
        }

        &::after {
        content: '';
        display: block;
        width: 40px;
        border-bottom: 6px solid ${props => props.lineColor}
    }
    }
`;

export const Controllers = styled.div`
    display: flex;
`;