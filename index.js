const { select, input } = require('@inquirer/prompts')


///abaixo é pra testar:

let meta = {
    value: "Tomar água",
    checked: false,
}

let metas = [ meta ]
const cadastrarMeta = async() => {

    const meta = await input({ message: "Digite a meta:" }) 
    //mesma coisa que o select, chamou na pasta, e espera agora o usuário colocar algo
    //uso do legth fala se tem mais de um caractere! tipo, confirmar se o usuário colocou algo
    if(meta.length == 0) {
        console.log("A meta não pode ser vazia!")
        return
    }

    //tendo algo, ele puxa pra metas (o array) o valor da meta, e lá depois, ele moctra as metas cadastradas.

    metas.push(
        {value: meta, checked: false}
    )

}

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
                await cadastrarMeta()
                console.log( metas )
                ///importante o uso este await!
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

