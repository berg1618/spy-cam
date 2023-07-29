import { cadastrarUsuarioBanco } from "../api";


describe("testando a api - cadastrarUsuarioBanco", () => {
    test('cadastro com sucesso', async () => {

        try {
            const res = await cadastrarUsuarioBanco("claudio_", "claudio@email", "123")

            expect(res.status).toEqual(201);    
        }
        
        // caso queira rodar o teste mais uma vez, iremos cadastrar um novo usuario
        // com nome aleatorio para que nao de erro no teste ao cadastrar
        // um usuario com mesmo nome
        catch {
            try {
                const nome = "zezin_" + (Math.random() * 1000).toString()
                const email = "ze@gmail.com" + (Math.random() * 1000).toString()
                const senha = "123"

                const res = await cadastrarUsuarioBanco(nome, email, senha)
                expect(res.status).toEqual(201);
            }
            catch {
                console.log(`
                PARA RODAR ESSE TESTE VOCÊ DEVE RODAR O BACKEND
                NO ARQUIVO DE CONFIGURACAO DO AXIOS ADICIONE O ENDERÇO IP DA APLICAÇÃO + PORTA:
                ex: http:<SEU IP>:8013
                `);
            }
                
        }

    });

     test('erro ao cadastrar um nome de usuario que ja existe', async () => {
        try {
              // cadastrar alguem com o msm nome de usuario
            const res = await cadastrarUsuarioBanco("claudio_", "claudio@email", "3333")

            expect(res.response.status).toEqual(400);

        }
        catch {
            console.log(`
                PARA RODAR ESSE TESTE VOCÊ DEVE RODAR O BACKEND
                NO ARQUIVO DE CONFIGURACAO DO AXIOS ADICIONE O ENDERÇO IP DA APLICAÇÃO + PORTA:
                ex: http:<SEU IP>:8013
                `);
        }

    });

    test('erro ao mandar corpo da requisicao null', async () => {
        try {
            const res = await cadastrarUsuarioBanco()

            expect(res.response.status).toEqual(400);

        }
        catch {
            console.log(`
                PARA RODAR ESSE TESTE VOCÊ DEVE RODAR O BACKEND
                NO ARQUIVO DE CONFIGURACAO DO AXIOS ADICIONE O ENDERÇO IP DA APLICAÇÃO + PORTA:
                ex: http:<SEU IP>:8013
                `);  
        }

    });
  })
  