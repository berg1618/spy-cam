import axios from "axios"
import Config from 'react-native-config';

const Url = Config.URL;

console.log(Url);

const api = axios.create({
  baseURL: 'http://10.49.6.99:8013',
  timeout: 100000,
  headers: { 'X-Custom-Header': 'foobar' }
})


const cadastrarUsuarioBanco = async (nome, email, senha) => {
  console.log(Url)
  let req;
  try {
    req = await api.post('/usuarios/cadastro', {
      nome: nome,
      email: email,
      senha: senha
    })
  } catch (err) {
    console.log(err)
  }
  return req
}


const cadastrarPerfilBanco = async (FormData) => {
  try {
    const res = await api.post('pessoa', FormData)
    return res;
  } catch (err) {
    console.log(err)
  }
}

export {
  cadastrarUsuarioBanco,
  cadastrarPerfilBanco
}