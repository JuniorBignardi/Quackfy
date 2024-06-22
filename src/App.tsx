import { Header } from './Components/Header'
import { GlobalStyle } from './styles/global'
import Modal from "react-modal"
import { useState } from 'react'

// reaproveitar a estrutura
import { Outlet } from 'react-router-dom'
import { NewUserModal } from './Components/NewUserModal'
import { NewRegisterModal } from './Components/NewRegisterModal'

Modal.setAppElement('#root');

function App() {
  const [isNewUserOpen, setIsNewUserOpen] = useState(false);

  function handleOpenNewUserModal(){
      setIsNewUserOpen(true);
  }

  function handleCloseNewUserModal(){
      setIsNewUserOpen(false);
  }


  const [isNewRegisterOpen, setIsNewRegisterOpen] = useState(false);

  function handleOpenNewRegisterModal(){
    setIsNewUserOpen(false);  
    setIsNewRegisterOpen(true);
  }

  function handleCloseNewRegisterModal(){
      setIsNewRegisterOpen(false);
      setIsNewUserOpen(false);
  }


  return (
    <>
      <Header handleOpenNewUserModal={handleOpenNewUserModal}/>
      
      <NewUserModal isOpen={isNewUserOpen} onRequestClose={handleCloseNewUserModal} handle={handleOpenNewRegisterModal}></NewUserModal>
      
      <NewRegisterModal isOpen={isNewRegisterOpen} onRequestClose={handleCloseNewRegisterModal}></NewRegisterModal>

      <GlobalStyle/>
      <Outlet />
    </>
  )
}

export default App
