import axios from "axios"

const api = axios.create({
  baseURL: 'http://192.168.56.1:8013',
  timeout: 5000,
  headers: {'X-Custom-Header': 'foobar'}
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