import styled, { css } from 'styled-components'

interface IContainerProps {
  menuIsOpen: boolean
}

interface IThemeToggleFooterProps {
  menuIsOpen: boolean
}

export const Container = styled.div<IContainerProps>`
  grid-area: AS;

  background-color: ${(props) => props.theme.colors.secondary};
  padding-left: 20px;

  position: relative;

  @media (max-width: 600px) {
    padding-left: 7px;
    position: fixed;
    z-index: 10;

    height: ${(props) => (props.menuIsOpen ? '100vh' : '70px')};
    overflow: hidden;

    width: 150px;

    ${(props) =>
      !props.menuIsOpen &&
      css`
        border: none;
        border-bottom: 1px solid ${(props) => props.theme.colors.gray};
      `}
  }
`

export const Header = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 70px;

  @media (max-width: 600px) {
    justify-content: space-between;
  }
`

export const LogImg = styled.img`
  height: 40px;
  width: 40px;

  @media (max-width: 600px) {
    display: none;
  }
`

export const Title = styled.h3`
  color: ${(props) => props.theme.colors.white};

  @media (max-width: 600px) {
    display: none;
  }
`

export const MenuContainer = styled.nav`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  gap: 1.5rem;
`

export const MenuItemLink = styled.a`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.gray};
  text-decoration: none;
  font-weight: 700;

  margin: 7px 0;

  transition: opacity 0.3s;

  &:hover {
    opacity: 0.7;
  }

  > svg {
    font-size: 18px;
    margin-right: 5px;
  }
`

export const MenuItemButton = styled.button`
  position: absolute;
  bottom: 100px;
  width: calc(250px - 40px);
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  font-size: 1rem;
  font-weight: 700;

  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.success};

  border-radius: 6px;
  padding: 10px 12px;

  transition: opacity 0.3s;

  &:hover {
    opacity: 0.7;
  }

  > svg {
    font-size: 18px;
    margin-right: 5px;
  }

  @media (max-width: 470px) {
    width: calc(150px - 7px - 20px);
  }
`

export const ToggleMenu = styled.button`
  display: none;
  width: 40px;
  height: 40px;

  border-radius: 5px;
  font-size: 22px;
  background-color: ${(props) => props.theme.colors.warning};

  > svg {
    fill: ${(props) => props.theme.colors.white};
  }

  transition: opacity 0.3s;

  &:hover {
    opacity: 0.7;
  }

  @media (max-width: 600px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const ThemeToggleFooter = styled.footer<IThemeToggleFooterProps>`
  display: none;
  position: absolute;
  bottom: 30px;

  @media (max-width: 470px) {
    display: ${(props) => (props.menuIsOpen ? 'flex' : 'none')};
  }
`
