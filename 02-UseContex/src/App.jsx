import './App.css'
import Login from './Components/Login.jsx'
import Profile from './Components/Profile.jsx'
import UserContextProvider from './Context/ContextProvider'

function App() {
  

  return (
    <UserContextProvider>
      <h1>Login Page By Hamza Memon</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App