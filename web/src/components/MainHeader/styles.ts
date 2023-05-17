import styled from 'styled-components'

export const Container = styled.div`
  grid-area: MH;

  background-color: ${(props) => props.theme.colors.secondary};

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 10px;
`

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.colors.white};
`

export const Welcome = styled.h3``

export const UserName = styled.span``
