import axios from "axios"
// import Config from 'react-native-config';

// const Url = Config.URL;


// cole a url que foi gerada pelo ngrok
const api = axios.create({
  baseURL: 'https://ab1e-2804-4764-20e-4e00-6552-5507-dba9-ae24.ngrok-free.app',
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
    const bearerToken = 'Bearer ' + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InplQGdtYWlsLmNvbSIsInN1YiI6MiwiaWF0IjoxNjg4MTQ2NzUzLCJleHAiOjE2ODgxNTAzNTN9.sjVnxsznQrbr5j6COIKg425GgKm8_TczlG-9U6AW3IM"
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