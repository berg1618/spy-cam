import axios from "axios"
import Config from 'react-native-config';

const Url = Config.URL;

const api = axios.create({
  baseURL: Url,
  timeout: 5000,
  headers: { 'X-Custom-Header': 'foobar' }
})


const cadastrarUsuarioBanco = async (nome, email, senha) => {
  const req = await api.post('usuarios', {
    nome: nome,
    email: email,
    senha: senha
  })
  return req
}

export {
  cadastrarUsuarioBanco
}