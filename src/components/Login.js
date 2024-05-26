import React from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom"; // Importe useNavigate
import "../styles/Login.css";
import Logo from "../assets/RandomFood Logo.svg";
import BackButton from "./BackButton";
import Footer from "./Footer";

function Login() {
  const navigate = useNavigate(); // Inicialize o hook useNavigate

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log(`Usuário logado com sucesso: ${user.email}`);
      // Limpar campos do formulário após o login (opcional)
      e.target.reset();

      // Redirecionar para a rota '/surprise' após o login bem-sucedido
      navigate("/home");
    } catch (error) {
      console.error(error);
      let errorMessage = "Falha ao fazer login. Verifique suas credenciais.";
      if (error.code === "auth/user-not-found") {
        errorMessage = "Usuário não encontrado. Verifique o email digitado.";
      } else if (error.code === "auth/wrong-password") {
        errorMessage = "Senha incorreta. Tente novamente.";
      }
      alert(errorMessage);
    }
  };

  return (
    <div className="login">
      <BackButton />
        <img src={Logo} alt="Random Food" />
      <div className="textos">
        <h1>Login</h1>
        <p>Entre com seu email e senha para acessar o Random Food.</p>
      </div>
      <form onSubmit={handleLogin} className="dados">
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
          Login
        </button>
      </form>
      <div className="links">
        <p>
          Esqueceu sua senha? <a href="/forgot-password">Clique aqui.</a>
        </p>
        <p>
          Ainda não tem uma conta? <a href="/register">Cadastre-se!</a>
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
