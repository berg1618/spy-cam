import axios from "axios"

// import Config from 'react-native-config';


// const Url = Config.URL;


// cole a url que foi gerada pelo ngrok
const api = axios.create({
  baseURL: 'http://10.48.8.190:8013',
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
    const bearerToken = 'Bearer ' + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InplZGFidXJyYUBnbWFpbC5jb20iLCJzdWIiOjYsImlhdCI6MTY4ODQwOTI2OSwiZXhwIjoxNjg4NDEyODY5fQ.JOSAq-k5nNCtkcNu2J1h1OGQXGVxccGPtX6zNXswmxs"
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

const listarNotificacoes = async () => {
  let req;
  try {
    req = await api.get('/registro')
     return req
  } catch (err) {
    return err
  }
}




export {
  cadastrarUsuarioBanco,
  cadastrarPerfilBanco,
  listarNotificacoes
}