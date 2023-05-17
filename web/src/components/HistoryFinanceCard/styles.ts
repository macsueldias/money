import styled, { keyframes } from 'styled-components'

interface TagProps {
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

export const Container = styled.li`
  background-color: ${(props) => props.theme.colors.secondary};

  list-style: none;
  border-radius: 6px;
  margin: 10px 0;
  padding: 12px 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  cursor: pointer;
  transition: all 0.3s;

  position: relative;

  animation: ${animate} 1s ease-in;

  &:hover {
    opacity: 0.7;
    transform: translateX(10px);
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 10px;
  }

  > div span {
    font-size: 22px;
    font-weight: 500;
  }
`

export const Tag = styled.div<TagProps>`
  width: 13px;
  height: 60%;

  background-color: ${(props) => props.color};
  position: absolute;
  left: 0;
`
