import React from "react";
import userImg from '../resources/emyuser.jpeg'; // Importe a imagem do usuário
import '../styles/UserInfo.css'; // Importe o arquivo de estilosq

const userName = "Emylle";
const UserInfo = () => {
        return (
        <div className='UserInfo'>
            <div className="Name">
            <h2>Olá {userName},</h2>
            </div>
            <div className='ProfilePicture'>
            <img src={userImg} alt="User" />
            </div>
        </div>
    );
}

export default UserInfo;