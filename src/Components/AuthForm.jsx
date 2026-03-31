import { useState } from 'react'

const defaultValues = {
  email: '',
  password: '',
}

function AuthForm({
  title,
  description,
  submitLabel,
  onSubmit,
  loading,
  errorMessage,
  passwordAutoComplete = 'current-password',
}) {
  const [values, setValues] = useState(defaultValues)

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await onSubmit(values.email, values.password)
  }

  return (
    <section className="auth">
      <div className="auth-header">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>

      <form className="form" onSubmit={handleSubmit}>
        <label className="field">
          <span>Email</span>
          <input
            type="email"
            name="email"
            placeholder="email@exemplo.com"
            value={values.email}
            onChange={handleChange}
            autoComplete="email"
            required
            disabled={loading}
          />
        </label>

        <label className="field">
          <span>Senha</span>
          <input
            type="password"
            name="password"
            placeholder="Sua senha"
            value={values.password}
            onChange={handleChange}
            autoComplete={passwordAutoComplete}
            required
            disabled={loading}
          />
        </label>

        {errorMessage ? <p className="error">{errorMessage}</p> : null}

        <button className="primary" type="submit" disabled={loading}>
          {submitLabel}
        </button>
      </form>
    </section>
  )
}

export default AuthForm