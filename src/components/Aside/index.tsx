import React, { useState } from 'react'
import {
  MdDashboard,
  MdInput,
  MdArrowDownward,
  MdArrowUpward,
  MdExitToApp,
  MdClose,
  MdMenu,
} from 'react-icons/md'

import logoImg from '../../assets/Logo.png'

import { useAuth } from '../../hooks/auth'

import { useTheme } from '../../hooks/theme'

import Toggle from '../Toggle'

import {
  Container,
  Header,
  LogImg,
  MenuContainer,
  MenuItemLink,
  MenuItemButton,
  Title,
  ToggleMenu,
  ThemeToggleFooter,
} from './styles'

const Aside: React.FC = () => {
  const [toggleMenuIsOpened, SetToggleMenuIsOpened] = useState<boolean>(false)

  const { toggleTheme, theme } = useTheme()
  const [darkTheme, setDarkTheme] = useState(() => theme.title === 'dark')

  const handleChangeTheme = () => {
    setDarkTheme(!darkTheme)
    toggleTheme()
  }

  const handleToggleMenu = () => {
    SetToggleMenuIsOpened(!toggleMenuIsOpened)
  }

  const { signOut } = useAuth()

  return (
    <Container menuIsOpen={toggleMenuIsOpened}>
      <Header>
        <ToggleMenu
          onClick={() => {
            handleToggleMenu()
          }}
        >
          {toggleMenuIsOpened ? <MdClose /> : <MdMenu />}
        </ToggleMenu>
        <LogImg src={logoImg} alt="Logo Minha Carteira" />
        <Title>Minha Carteira</Title>
      </Header>
      <MenuContainer>
        <MenuItemLink href="/dashboard">
          <MdDashboard />
          Dashboard
        </MenuItemLink>
        <MenuItemLink href="#">
          <MdInput />
          Novo registro
        </MenuItemLink>
        <MenuItemLink href="/list/balance-entry">
          <MdArrowDownward />
          Entradas
        </MenuItemLink>
        <MenuItemLink href="/list/balance-exit">
          <MdArrowUpward />
          Saídas
        </MenuItemLink>
      </MenuContainer>
      <MenuItemButton onClick={() => signOut()}>
        <MdExitToApp />
        Logout
      </MenuItemButton>
      <ThemeToggleFooter menuIsOpen={toggleMenuIsOpened}>
        <Toggle
          labelLeft="Light"
          labelRight="Dark"
          checked={darkTheme}
          onChange={handleChangeTheme}
        />
      </ThemeToggleFooter>
    </Container>
  )
}

export default Aside
