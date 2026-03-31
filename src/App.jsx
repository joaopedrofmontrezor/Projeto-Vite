import { useEffect, useState } from 'react'
import './App.css'
import { loginWithEmail, logout, observeAuthState, registerWithEmail } from './auth.js'
import Dashboard from './Components/DashBoard'
import Login from './Components/Login'
import Register from './Components/Register'

const MODES = {
  login: 'login',
  register: 'register',
}

function App() {
  const [user, setUser] = useState(null)
  const [mode, setMode] = useState(MODES.login)
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [initializing, setInitializing] = useState(true)

  useEffect(() => {
    const unsubscribe = observeAuthState((currentUser) => {
      if (currentUser) {
        console.log('Usuário autenticado detectado')
        setUser(currentUser)
      } else {
        console.log('Usuário não autenticado')
        setUser(null)
      }
      setInitializing(false)
    })

    return unsubscribe
  }, [])

  const handleLogin = async (email, password) => {
    setErrorMessage('')
    setLoading(true)
    try {
      await loginWithEmail(email, password)
    } catch (error) {
      setErrorMessage(error?.message ?? 'Erro ao fazer login')
    } finally {
      setLoading(false)
    }
  }

  const handleRegister = async (email, password) => {
    setErrorMessage('')
    setLoading(true)
    try {
      await registerWithEmail(email, password)
    } catch (error) {
      setErrorMessage(error?.message ?? 'Erro ao fazer cadastro')
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = async () => {
    setErrorMessage('')
    setLoading(true)
    try {
      await logout()
    } catch (error) {
      setErrorMessage(error?.message ?? 'Erro ao fazer logout')
    } finally {
      setLoading(false)
    }
  }

  const isLoginMode = mode === MODES.login

  return (
    <div className="app">
      <main className="card">
        <header className="header">
          <p className="eyebrow">Autenticação Firebase</p>
          <h1>Autenticação</h1>
          <p className="subtitle">Login com Email e senha persistentes.</p>
        </header>

        {initializing ? (
          <div className="status">Carregando sessão...</div>
        ) : user ? (
          <Dashboard user={user} onLogout={handleLogout} loading={loading} />
        ) : (
          <>
            {isLoginMode ? (
              <Login
                onLogin={handleLogin}
                loading={loading}
                errorMessage={errorMessage}
              />
            ) : (
              <Register
                onRegister={handleRegister}
                loading={loading}
                errorMessage={errorMessage}
              />
            )}

            <div className="toggle">
              <button
                className="link"
                type="button"
                onClick={() => {
                  setErrorMessage('')
                  setMode(isLoginMode ? MODES.register : MODES.login)
                }}
                disabled={loading}
              >
                {isLoginMode
                  ? 'Não tem conta? Cadastre-se'
                  : 'Já tem conta? Entrar'}
              </button>
            </div>
          </>
        )}
      </main>
    </div>
  )
}

export default App