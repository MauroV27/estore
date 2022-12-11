import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { loginUser } from "../../actions/users";

const Signin = () => {
  // const { signin } = useAuth();
  const navigate = useNavigate();

  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    if (!login | !senha) {
      setError("Preencha todos os campos");
      return;
    }

    // const res = signin(email, senha);
    console.log("Valores: ", login, "  -  ", senha)
    const res = await loginUser(login, senha)
    console.log(res)

    if (res) {
      if ( res.data ) { 
        const {message, status, userSessionId} = res.data;
      
        if ( status === "success" ){
          // login deu bom
          // mudar para a outra tela
          // salvar o valor userSessionId na memoria do navegador
          navigate("/home");
        } else {
          setError(`Erro ao logar: ${message}`);

        }
      }
    
      
    }

  };

  return (
    <C.Container>
      <C.Label>LOGIN ESTORE</C.Label>
      <C.Content>
        <Input
          type="text"
          placeholder="Digite seu login"
          value={login}
          onChange={(e) => [setLogin(e.target.value), setError("")]}
        />
        <Input
          type="password"
          placeholder="Digite sua Senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <C.labelError>{error}</C.labelError>
        <Button Text="Entrar" onClick={handleLogin} />
        <C.LabelSignup>
          Não tem uma conta?
          <C.Strong>
            <Link to="/signup">&nbsp;Registre-se</Link>
          </C.Strong>
        </C.LabelSignup>
      </C.Content>
    </C.Container>
  );
};

export default Signin;
