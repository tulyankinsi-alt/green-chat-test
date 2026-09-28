import { ChatPage, LoginPage } from "../pages";
import { useAuthStore } from "../store";

export default function App() {
  const isLoggedIn = useAuthStore((s) => s.idInstance);

  if (!isLoggedIn) {
    return <LoginPage />
  }

  return <ChatPage />
}
