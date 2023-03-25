import styled from 'styled-components'
import Switch, { ReactSwitchProps } from 'react-switch'

export const Container = styled.div`
  display: flex;
  align-items: center;
`

export const ToggleLabel = styled.span`
  color: ${(props) => props.theme.colors.white};
`

export const ToggleSelector = styled(Switch).attrs<ReactSwitchProps>(
  ({ theme }) => ({
    onColor: theme.colors.white,
    offColor: theme.colors.gray,
  }),
)<ReactSwitchProps>`
  margin: 0 7px;

  .react-switch-handle {
    background: ${(props) => props.theme.colors.tertiary} !important;
  }
`
