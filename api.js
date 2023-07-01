import axios from "axios"

// import Config from 'react-native-config';


// const Url = Config.URL;


// cole a url que foi gerada pelo ngrok
const api = axios.create({
  baseURL: 'https://fb6b-2804-4764-20e-4e00-7d7f-4452-3f44-b817.ngrok-free.app',
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
     return req
  } catch (err) {
    return err
  }
}


const cadastrarPerfilBanco = async (FormData) => {
  try {
    let req;
    const bearerToken = 'Bearer ' + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InplQGdtYWlsLmNvbSIsInN1YiI6MiwiaWF0IjoxNjg4MjI4ODU4LCJleHAiOjE2ODgyMzI0NTh9.0GmnycvsXUBNxIdFxpvOczNhbwYehyFYVvqrsJQRIf4"
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
  cadastrarPerfilBanco,
}