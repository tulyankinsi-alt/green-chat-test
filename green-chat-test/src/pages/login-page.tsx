import { useState } from 'react'
import { useAuthStore } from '../store/auth-store'

export function LoginPage() {
  const login = useAuthStore((s) => s.login)
  const [idInstance, setIdInstance] = useState('')
  const [apiTokenInstance, setApiTokenInstance] = useState('')
  const [apiUrl, setApiUrl] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = () => {
    if (!idInstance.trim() || !apiTokenInstance.trim() || !apiUrl.trim()) return

    setIsLoading(true)
    try {
      login({ idInstance, apiTokenInstance, apiUrl })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="login-page">
      <form className="login-card" onSubmit={handleSubmit}>
        <h1>Telegram</h1>
        <p className="login-hint">
          Введите данные инстанса GREEN-API
        </p>

        <label>
          idInstance
          <input
            type="text"
            value={idInstance}
            onChange={(e) => setIdInstance(e.target.value)}
            placeholder="1101000000"
            autoComplete="off"
            required
            disabled={isLoading}
          />
        </label>

        <label>
          apiTokenInstanceInstance
          <input
            type="password"
            value={apiTokenInstance}
            onChange={(e) => setApiTokenInstance(e.target.value)}
            placeholder="api token"
            autoComplete="off"
            required
            disabled={isLoading}
          />
        </label>

        <label>
          apiUrl
          <input
            type="url"
            value={apiUrl}
            onChange={(e) => setApiUrl(e.target.value)}
            placeholder="https://1100.api.green-api.com"
            autoComplete="off"
            required
            disabled={isLoading}
          />
        </label>

        <button type="submit" className="btn-primary" disabled={isLoading}>
          {isLoading ? 'Вход...' : 'Войти'}
        </button>
      </form>
    </div>
  )
}