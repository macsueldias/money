import React from 'react'

import { Container } from './styles'

interface ContentProps {
  children?: any
}

const Content: React.FC<ContentProps> = ({ children }) => (
  <Container>{children}</Container>
)

export default Content
