import logoImg from '../../assets/Logo.svg'
import { Container, Content } from './styles'
import profile from '../../assets/profile.svg'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Modal from "react-modal"


interface HeaderProps{
    handleOpenNewUserModal: ()=>void;
}


export function Header({handleOpenNewUserModal}:HeaderProps){
    return (
        <Container>
            <Content>
            <Link to='/'><img src={logoImg} alt="Logo do site de Quiz Quackfy"></img></Link>
            <div className='right'>
                <div onClick={handleOpenNewUserModal}>
                    <img className='profile' src={profile} alt="sua foto de usuário" />
                </div>
                <button type="button">
                    Criar quiz
                </button>
            </div>
            </Content>
        </Container>
    )
}