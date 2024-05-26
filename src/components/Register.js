import React from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebaseConfig';
import { useNavigate } from 'react-router-dom'; // Importe useNavigate
import "../styles/Login.css";
import Logo from "../assets/RandomFood Logo.svg";
import BackButton from './BackButton';
import Footer from './Footer';

function Signup() {
  const navigate = useNavigate(); // Inicialize o hook useNavigate

  const handleSignup = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      // Criação do usuário
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log(`Usuário criado com sucesso: ${userCredential.user.email}`);
      alert("Cadastro realizado com sucesso!");

      // Login automático após cadastro
      // Você pode adaptar essa lógica conforme necessário
      const user = userCredential.user;
      console.log(`Usuário logado automaticamente: ${user.email}`);

      // Redirecionamento para a rota '/surprise'
      navigate('/home');
    } catch (error) {
      console.error(error);
      alert("Falha ao criar a conta. Verifique as informações e tente novamente.");
    }
  };

  return (
    <div className="login">
      <BackButton />
      <div className="textos">
        <img src={Logo} alt="Random Food" />
        <h1>Cadastre-se</h1>
        <p>Informe seu email e senha para acessar o Random Food.</p>
      </div>
      <form onSubmit={handleSignup} className="dados">
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="campo"
        />
        <input
          type="password"
          name="password"
          placeholder="Senha"
          required
          className="campo"
        />
        <button type="submit" className="enviar">
          Cadastre-se
        </button>
      </form>
      <div className="links">
        <p>
          Já possui uma conta? <a href="/login">Entre aqui!</a>
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Signup;
