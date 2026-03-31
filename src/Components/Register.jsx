import AuthForm from './AuthForm'

function Register({ onRegister, loading, errorMessage }) {
  return (
    <AuthForm
      title="Cadastro"
      description="Crie sua conta com um email e senha."
      submitLabel={loading ? 'Cadastrando...' : 'Cadastrar'}
      onSubmit={onRegister}
      loading={loading}
      errorMessage={errorMessage}
      passwordAutoComplete="new-password"
    />
  )
}

export default Register