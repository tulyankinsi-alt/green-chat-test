import { LoginPage } from "../pages/login-page";
import { useAuthStore } from "../store/auth-store"

export default function App() {
  const isLoggedIn = useAuthStore((s) => s.idInstance);

//   if (!isLoggedIn) {
//     return (
//       <div className="login-page">
//         <p className="login-hint">Загрузка…</p>
//       </div>
//     )
//   }

  if (!isLoggedIn) {
    return <LoginPage />
  }

  return <>Пользователь залогинен!</>
//   return <ChatPage />
}
