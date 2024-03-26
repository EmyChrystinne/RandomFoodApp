import React from "react";
import "../styles/Login.css"; // Importe o arquivo CSS

const Login = () => {
  // Função de callback para o login via Google
  const handleGoogleLogin = () => {
    // Adicione aqui a lógica para o login via Google com o Firebase
    // Por enquanto, apenas exibiremos uma mensagem no console
    console.log("Login via Google");
  };

  return (
    <div id="LoginPage">
      <div className="Infos">
        <h1>Bem-Vindo ao RandomFood!</h1>
        <h2>
          Já decidiu o que <strong>comer</strong> hoje?
        </h2>
      </div>
      <form>
        {/* Aqui você pode adicionar campos de entrada para e-mail e senha se necessário */}
        <button onClick={handleGoogleLogin} className="Login">
          Login com Google
        </button>
      </form>
    </div>
  );
};

export default Login;
