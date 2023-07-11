import axios from "axios"
import Config from 'react-native-config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as bcrypt from 'bcryptjs';

const Url = Config.URL;

// cole a url que foi gerada pelo ngrok
const api = axios.create({
  baseURL: 'https://134b-200-137-5-186.ngrok-free.app',
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


const getToken = async () => {
   AsyncStorage.getItem('access_token', (err, result) => {
    return result
  })
}


const cadastrarPerfilBanco = async (FormData) => {
  try {
    let req;

    let t = ''

    AsyncStorage.getItem('access_token', async (err, result) => {
      t  = result

      const bearerToken = `Bearer ${t}`;
      console.log('aaaa: ', bearerToken);
      
    req = await api.post('/pessoa', FormData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: bearerToken
      }
    });
    return req;
    })

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

    /*if (!user.data) {
      throw new Error('erro');
    }

    const checkPassowrd = await bcrypt.compare(senha, user.data.senha);

    if (checkPassowrd) {
      return user.data;
    } else {
      throw new Error('campos invalidos');
    }*/

    return user
  } catch (error) {
    throw error;
  }
};


export {
  cadastrarUsuarioBanco,
  cadastrarPerfilBanco,
  storeToken
}
