import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3100'
})


const loginService = {
  login: async function (email: string, password: string) {
    let body = {
      email: email,
      password: password,
    }

   return await api.post('/login', body)
      .then(function (response) {
        // handle success
        console.log("Login realizado com sucesso",  response);

        return response ? response : null;
      })
      .catch(function (error) {
        // handle error
        console.log("Login com erro", error);
      });
  },

  createUser: async function (name: string, email: string, password: string) {
    let body = {
      name: name,
      email: email,
      password: password,
      role: 2
    }
    return await api.post('/users', body)
      .then(function (response) {
        // handle success
        console.log("Cadastro realizado com sucesso", response);
        return response ? response : null;
      })
      .catch(function (error) {
        // handle error
        console.log("Cadastro com erro", error);
      });
  }
};

export default loginService;
