import React, { useState } from 'react'

import { useTheme } from '../../hooks/theme'

import Toggle from '../Toggle'

import { Container, Profile, Welcome, UserName } from './styles'

const MainHeader: React.FC = () => {
  const { toggleTheme, theme } = useTheme()

  const [darkTheme, setDarkTheme] = useState(() => theme.title === 'dark')

  const handleChangeTheme = () => {
    setDarkTheme(!darkTheme)
    toggleTheme()
  }

  return (
    <Container>
      <Toggle
        labelLeft="Light"
        labelRight="Dark"
        checked={darkTheme}
        onChange={handleChangeTheme}
      />
      <Profile>
        <Welcome>Olá, </Welcome>
        <UserName>Macsuel Dias</UserName>
      </Profile>
    </Container>
  )
}

export default MainHeader
