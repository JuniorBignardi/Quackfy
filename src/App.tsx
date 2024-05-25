import { Header } from './Components/Header'
import { GlobalStyle } from './styles/global'

// reaproveitar a estrutura
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <Header/>
      <GlobalStyle/>
      <Outlet />
    </>
  )
}

export default App
