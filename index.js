const { select } = require('@inquirer/prompts')

const start = async() => {

    while(true){

        //esse await (pra funcionar, tenha o async na função) fala pro js, "espera, o usuário vai selecionar algo!"

        const opcao = await select ({
            message: "Menu >",
            choices: [
                {
                    name: "Cadastrar meta",
                    value: "cadastrar",
                },

                {
                    name: "Listar metas",
                    value: "listar"
                },

                {
                    name: "Sair",
                    value: "sair"
                }
            ]
        })

        ///como está funcionando? Imagine o seguinte, a gente pegou o módulo do select, e esperou o usuário selecionar algo, se ele selecionou por exemplo cadastrar, opcao troca por cadastrar, e vai pro swith case, no cadastrar tem o caso de cadastrar, ele fasz o que tem, que fazer, terminando, volta no menu, e assim por diante. 

        // alterando a opcao com algum item abaixo, ele faz certa ação, mas toma cuidado que neste estado, se eu colocar em um, elke faz infinitamente:

        switch(opcao){
            case "cadastrar":
                console.log("vamos cadastrar!")
                break
            
            case "listar":
                console.log("vamos listar")
                break
            
            case "sair":
                console.log("Asta la vista, baby!")
                return
    }
}

}

start()

