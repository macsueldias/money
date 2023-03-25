import styled, { keyframes } from 'styled-components'

interface ILengendProps {
  color: string
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
`

export const Container = styled.div`
  width: 48%;
  height: 260px;

  margin-block: 10px;

  background-color: ${(props) => props.theme.colors.secondary};

  color: ${(props) => props.theme.colors.white};

  border-radius: 7px;

  display: flex;

  animation: ${animate} 2s ease-in;

  @media (max-width: 770px) {
    display: flex;
    width: 100%;

    margin: 0;
  }
`

export const SideLeft = styled.aside`
  padding: 30px 20px;

  > h2 {
    margin-bottom: 20px;
  }

  @media (max-width: 1345px) {
    padding: 0 15px 5px;
    margin-bottom: 7px;

    > h2 {
      margin-top: 15px;
      margin-top: 7px;
    }
  }

  @media (max-width: 420px) {
    padding: 15px;
    margin-bottom: 7px;
  }
`

export const LegendContainer = styled.ul`
  list-style: none;

  max-height: 175px;
  padding-right: 16px;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.secondary};
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.colors.tertiary};
    border-radius: 6px;
  }

  @media (max-width: 1345px) {
    display: flex;
    flex-direction: column;
  }
`

export const Legend = styled.li<ILengendProps>`
  display: flex;
  align-items: center;

  margin-bottom: 7px;

  > div {
    border-radius: 5px;
    margin-left: 5px;

    font-size: 14px;
    font-weight: 700;
    text-align: center;
  }

  span {
    &:first-child {
      width: 20px;
      height: 5px;

      background: ${(props) => props.color};
    }

    &:last-child {
      margin-left: 5px;
      font-weight: 700;
    }
  }

  @media (max-width: 1345px) {
    font-size: 14px;
    margin: 3px 0;

    > div {
      width: 30px;
      height: 30px;

      font-size: 10px;
      line-height: 30px;
      padding: 2px;
    }

    > span {
      margin-left: 7px;
    }
  }
`

export const SideRight = styled.main`
  display: flex;
  flex: 1;
  justify-content: center;

  @media (max-width: 1345px) {
    height: 100%;
  }
`
