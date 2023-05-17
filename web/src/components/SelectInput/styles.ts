import styled from 'styled-components'

export const Container = styled.div`
  > select {
    padding: 8px 10px;
    border-radius: 6px;
    margin-left: 8px;

    &:focus {
      border: 0.8px solid ${(props) => props.theme.colors.success};
    }
  }

  @media (max-width: 600px) {
    > select {
      padding: 4px 2px;
      margin-left: 12px;
    }
  }
`
