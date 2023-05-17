import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from './hooks/theme'
import { AuthProvider } from './hooks/auth'

import App from './App'
import { BrowserRouter } from 'react-router-dom'
import dark from './styles/themes/dark'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <BrowserRouter>
    <ThemeProvider
      toggleTheme={function (): void {
        throw new Error('')
      }}
      theme={dark}
    >
      <AuthProvider>
        <App />
      </AuthProvider>
    </ThemeProvider>
  </BrowserRouter>,
)
