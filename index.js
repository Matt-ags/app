function start() {

    while(true){
        let opcao = "sair"

        // alterando a opcao com algum item abaixo, ele faz certa ação, mas toma cuidado que neste estado, se eu colocar em um, elke faz infinitamente:
        
        switch(opcao){
            case "cadastrar":
                console.log("vamos cadastrar!")
                break
            
            case "listar":
                console.log("vamos listar")
                break
            
            case "sair":
                return
    }
}

}

start()