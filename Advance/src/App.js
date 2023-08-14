import Login from './components/Login/Login'
import Home from './components/Home/Home'
import React, { useContext } from 'react'
import MainHeader from './components/MainHeader/MainHeader'
import AuthContext from './components/store/auth-context'

function App () {
  const ctx = useContext(AuthContext)
  return (
    <>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login onLogin={ctx.loginHandler} />}
        {ctx.isLoggedIn && <Home onLogout={ctx.logoutHandler} />}
      </main>
    </>
  )
}

export default App
