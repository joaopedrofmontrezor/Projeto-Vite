import AuthForm from './AuthForm'

function Login({ onLogin, loading, errorMessage }) {
  return (
    <AuthForm
      title="Login"
      description="Entre com seu email e senha cadastrados."
      submitLabel={loading ? 'Entrando...' : 'Entrar'}
      onSubmit={onLogin}
      loading={loading}
      errorMessage={errorMessage}
    />
  )
}

export default Login