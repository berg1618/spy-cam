import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

const api = axios.create({
  baseURL: 'https://ad1b-200-137-5-186.ngrok-free.app',
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
    const t = await AsyncStorage.getItem('access_token');
    const bearerToken = `Bearer ${t}`;

    const req = await api.post('/pessoa', FormData, {
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
    const user = await api.post('/auth/login', {
      email: email,
      senha: senha
    });
    return user
  } catch (error) {
    throw error;
  }
};

const listarNotificacoes = async () => {
  let req;
  try {
    req = await api.get('/registro')
    return req
  } catch (err) {
    return err
  }
}

const listarPessoas = async () => {
  try {
    const response = await api.get('/pessoa');
    return response.data;
  } catch (error) {
    throw error;
  }
};

const apagarPerfilBanco = async (pessoaId) => {
  try {
    const t = await AsyncStorage.getItem('access_token');
    const bearerToken = `Bearer ${t}`;

    const req = await api.delete(`/pessoa/${pessoaId}`, {
      headers: {
        Authorization: bearerToken,
      },
    });

    return req;
  } catch (err) {
    return err;
  }
};

export {
  cadastrarUsuarioBanco,
  cadastrarPerfilBanco,
  storeToken,
  listarNotificacoes,
  listarPessoas,
  apagarPerfilBanco
}