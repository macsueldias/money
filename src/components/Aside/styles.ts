import styled, { css } from 'styled-components'

interface IContainerProps {
    menuIsOpen: boolean;
}

interface IThemeToggleFooterProps {
    menuIsOpen: boolean;
}

export const Container = styled.div<IContainerProps>`
    grid-area: AS;

    background-color: ${props => props.theme.colors.secondary};
    padding-left: 20px;

    border-right: 1px solid ${props => props.theme.colors.gray};

    position: relative;

    @media (max-width: 600px) {
        padding-left: 7px;
        position: fixed;
        z-index: 10;

        height: ${props => props.menuIsOpen ? '100vh' : '70px'};
        overflow: hidden;

        width: 150px;

        ${props => !props.menuIsOpen && css `
            border: none;
            border-bottom: 1px solid ${props => props.theme.colors.gray};
        `}
    }
`;

export const Header = styled.header`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 70px;

    @media (max-width: 600px) {
        justify-content: space-between;
    }
`;

export const LogImg = styled.img`
    height: 40px;
    width: 40px;

    @media (max-width: 600px) {
        display: none;
    }
`;

export const Title = styled.h3`
    color: ${props => props.theme.colors.white};

    @media (max-width: 600px) {
        display: none;
    }
`;

export const MenuContainer = styled.nav`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
`;

export const MenuItemLink = styled.a`
    display: flex;
    align-items: center;
    color: ${props => props.theme.colors.info};
    text-decoration: none;

    margin: 7px 0;

    transition: opacity .3s;
    
    &:hover {
        opacity: 0.7;
    }

    > svg {
        font-size: 18px;
        margin-right: 5px;
    }
`;

export const MenuItemButton = styled.button`
    display: flex;
    align-items: center;
    
    font-size: 1rem;
    color: ${props => props.theme.colors.info};
    background-color: transparent;

    margin: 7px 0;

    transition: opacity .3s;
    
    &:hover {
        opacity: 0.7;
    }

    > svg {
        font-size: 18px;
        margin-right: 5px;
    }
`;

export const ToggleMenu = styled.button`
    display: none;
    width: 40px;
    height: 40px;

    border-radius: 5px;
    font-size: 22px;
    background-color: ${props => props.theme.colors.warning};

    > svg {
        fill: ${props => props.theme.colors.white};
    }

    transition: opacity .3s;

    &:hover {
        opacity: 0.7;
    }

    @media (max-width: 600px) {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const ThemeToggleFooter = styled.footer<IThemeToggleFooterProps>`
    display: none;
    position: absolute;
    bottom: 30px;

    @media (max-width: 470px) {
        display: ${props => props.menuIsOpen ? 'flex' : 'none'};
    }
`;