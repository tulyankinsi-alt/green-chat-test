import { useAuthStore } from "../../store/auth-store";

export function ChatPage() {
  const logout = useAuthStore((s) => s.logout);

  return (
    <div className="chat-page">
      Успешный вход!
      <button  className="btn-primary" onClick={logout}>Выйти</button>
    </div>
  )
}