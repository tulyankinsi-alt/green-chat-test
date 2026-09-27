import { ChatPage } from "../pages/chat-page/chat-page";
import { LoginPage } from "../pages/login-page";
import { useAuthStore } from "../store/auth-store"

export default function App() {
  const isLoggedIn = useAuthStore((s) => s.idInstance);

  if (!isLoggedIn) {
    return <LoginPage />
  }

  return <ChatPage />
}
