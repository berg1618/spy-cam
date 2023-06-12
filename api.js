import axios from "axios"
import Config from 'react-native-config';

const Url = Config.URL;


// cole a url que foi gerada pelo ngrok
const api = axios.create({
  baseURL: 'https://1c2c-2804-4764-20e-4e00-4d27-2cc1-807f-4719.ngrok-free.app',
  timeout: 5000,
  headers: { 'X-Custom-Header': 'foobar' }
})


const cadastrarUsuarioBanco = async (nome, email, senha) => {
  let req;
  try {
    req = await api.post('/usuarios/cadastro', {
      nome: nome,
      email: email,
      senha: senha
    })
  } catch (err) {
    return err
  }
  return req
}


const cadastrarPerfilBanco = async (FormData) => {
  try {
    let req;
    const bearerToken = 'Bearer ' + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imx1ZnlAIiwic3ViIjoxLCJpYXQiOjE2ODY1OTUyNzksImV4cCI6MTY4NjU5ODg3OX0.fo8kMyDPbMbXVoJ2Y62bnMPv2oNcMMpixCMsAdueGG0"
    req = await api.post('/pessoa', FormData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: bearerToken
      }
    })
    return req;
  } catch (err) {
    return err
  }
}


export {
  cadastrarUsuarioBanco,
  cadastrarPerfilBanco
}