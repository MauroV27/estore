import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

import { createUser } from "../../actions/users";

const Signup = () => {
  const navigate = useNavigate();

    // (name, email, password, adress, login)

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [login, setLogin] = useState("");
  const [error, setError] = useState("");
  const [endereco, setEndereco] = useState("");

  const handleRegister = async () => {
    if ( !email | !senha | !nome | !login ) {
      setError("Preencha todos os campos");
      return;
    }

    const res = await createUser(nome, email, senha, endereco, login);

    if (res) {
        if ( res.data ) { 
            const {message, status} = res.data;
        
            if ( status === "success" ){
                navigate("/singin");
                return;
            } else {
                setError(`Falha no cadastro. ${message}.`);
            }
        }
    }

    navigate("/singup")
  };

  return (
    <C.Container>
      <C.Label>Criar conta</C.Label>
      <C.Content>
      <Input
          type="text"
          placeholder="Digite seu nome :"
          value={nome}
          onChange={(e) => [setNome(e.target.value), setError("")]}
        />
        <Input
          type="text"
          placeholder="Digite seu login :"
          value={login}
          onChange={(e) => [setLogin(e.target.value), setError("")]}
        />
        <Input
          type="email"
          placeholder="Digite seu E-mail :"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />        
        <Input
          type="text"
          placeholder="Digite seu endereço :"
          value={endereco}
          onChange={(e) => [setEndereco(e.target.value), setError("")]}
        />
        <Input
          type="password"
          placeholder="Digite sua Senha :"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <C.labelError>{error}</C.labelError>
        <Button Text="Registrar" onClick={handleRegister} />
        <C.LabelSignin>
          Já tem uma conta?
          <C.Strong>
            <Link to="/singin">&nbsp;Login</Link>
          </C.Strong>
        </C.LabelSignin>
      </C.Content>
    </C.Container>
  );
};
export default Signup;
