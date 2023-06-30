import { cadastrarUsuarioBanco } from "../api";


describe("testando a api - cadastrarUsuarioBanco", () => {
    test('cadastro com sucesso', async () => {

        try {
            const res = await cadastrarUsuarioBanco("claudio_", "claudio@email", "123")

            expect(res.status).toEqual(200);    
        }
        
        // caso queira rodar o teste mais uma vez, iremos cadastrar um novo usuario
        // com nome aleatorio para que nao de erro no teste ao cadastrar
        // um usuario com mesmo nome
        catch {
            const nome = "zezin_" + (Math.random() * 1000).toString()
            const email = "ze@gmail.com"
            const senha = "123"

            const res = await cadastrarUsuarioBanco(nome, email, senha)

            expect(res.status).toEqual(200);    
        }

    });

     test('erro ao cadastrar um nome de usuario que ja existe', async () => {

        // cadastrar alguem com o msm nome de usuario
        const res = await cadastrarUsuarioBanco("claudio_", "claudio@email", "3333")

        expect(res.response.status).toEqual(400);

    });

    test('erro ao mandar corpo da requisicao null', async () => {

        const res = await cadastrarUsuarioBanco()

        expect(res.response.status).toEqual(400);

    });
  })
  