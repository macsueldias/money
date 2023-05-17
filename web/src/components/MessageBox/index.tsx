import React from 'react'

import { Container } from './styles'

interface IMessageBoxProps {
  title: string
  description: string
  footerText: string
}

const MessageBox: React.FC<IMessageBoxProps> = ({
  title,
  description,
  footerText,
}) => (
  <Container>
    <header>
      <h1>{title}</h1>
      <p>{description}</p>
    </header>
    <footer>
      <p>{footerText}</p>
    </footer>
  </Container>
)

export default MessageBox
