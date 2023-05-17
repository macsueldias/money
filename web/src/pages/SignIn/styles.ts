import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  background-color: ${(props) => props.theme.colors.primary};
`

export const Logo = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 30px;

  > h2 {
    color: ${(props) => props.theme.colors.white};
    margin-left: 7px;
  }

  > img {
    width: 40px;
    height: 40px;
  }
`

export const Form = styled.form`
  width: 300px;
  height: 300px;

  padding: 30px;

  border-radius: 10px;

  background-color: ${(props) => props.theme.colors.secondary};
`

export const FormTitle = styled.h2`
  color: ${(props) => props.theme.colors.white};

  margin-bottom: 40px;
  &:after {
    content: '';
    display: block;
    width: 55px;
    border-bottom: 10px solid ${(props) => props.theme.colors.success};
  }
`
