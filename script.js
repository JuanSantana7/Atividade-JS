let gerenciador = []

function cadastrar(){
    const addJogo = prompt("Insira o nome do jogo")
    const addGenero = prompt("Insira o genêro do jogo")
    const addClass = prompt("Insira a classificação do jogo")
    
    const jogo = {
        id: gerenciador.length + 1,
        nome: addJogo,
        genero: addGenero,
        classificacao: addClass
    }

    gerenciador.push(jogo)

}
    function mostrar(){

    let mensagem = "=== Jogos ===\n"

    for(let i = 0; i < gerenciador.length; i++){

        mensagem += "Id: " + gerenciador[i].id + " Nome: " + gerenciador[i].nome + "  Genêro: " + gerenciador[i].genero +  " Classificação: " + gerenciador[i].classificacao + "\n"
    }

    alert(mensagem)
}
  
function buscarPornome(){
        
    const nomeProcurado = prompt("Digite o nome do jogo")

    const JogoEncontrado = gerenciador.find(
        gerenciador => gerenciador.nome.toLowerCase() == nomeProcurado.toLowerCase()
    )

    if(JogoEncontrado){

        alert("Jogo encontrado: " + JogoEncontrado.nome + " Id: " +  JogoEncontrado.id + "  Genêro: " + JogoEncontrado.genero + "  Classificação: " + JogoEncontrado.classificacao)

    }else{

        alert("Jogo não encontrado")
    }

}


function deletarPorId() {

    const idProcurado = prompt("Digite o id do produto")

    const indexDoJogo = gerenciador.findIndex(
        gerenciador => gerenciador.id == idProcurado
    )

    if(indexDoJogo != -1){

        gerenciador.splice(indexDoJogo, 1)

        alert("Removido com sucesso")

    }else{

        alert("Jogo não encontrado")
    }
}

function limpar(){
   
    if(confirm("Deseja limpar seus cadastros?")){
        gerenciador= [];
        alert(" Cadastros limpo!");
    }
 }

 function removerUltimo(){
    gerenciador.pop()
    alert("Último jogo removido!")
 }