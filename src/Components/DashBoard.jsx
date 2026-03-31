function Dashboard({ user, onLogout, loading }) {
    return (
      <section className="dashboard">
        <h2>Sessão Privada</h2>
  
        <div className="user-card">
          <p className="label">Usuário logado</p>
          <p className="value">{user?.email ?? 'Email não disponível'}</p>
          <p className="muted">UID: {user?.uid ?? '---'}</p>
        </div>
  
        <button className="primary" type="button" onClick={onLogout} disabled={loading}>
          {loading ? 'Saindo...' : 'Logout'}
        </button>
      </section>
    )
  }
  
  export default Dashboard