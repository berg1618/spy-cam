import axios from "axios"
import Config from 'react-native-config';

const Url = Config.URL;

// cole a url que foi gerada pelo ngrok
const api = axios.create({
  baseURL: 'https://53ad-200-137-5-186.ngrok-free.app',
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

const cadastrarPerfilBanco = async (FormData, accessToken) => {
  try {
    let req;
    const bearerToken = `Bearer ${accessToken}`;
    req = await api.post('/pessoa', FormData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: bearerToken
      }
    });
    return req;
  } catch (err) {
    return err;
  }
};

const storeToken = async (email, senha) => {
  try {
    let req;

    req = await api.post('/auth/login', {
      email: email,
      senha: senha
    })
     return req
  } catch (err) {
    return err
  }
}

export {
  cadastrarUsuarioBanco,
  cadastrarPerfilBanco,
  storeToken
}
