function calcularexpressao(expressao){
    try{
        return  Function( '"use strict";return (' + expressao + ')')();
    }
    catch (error){
        return 'Erro';
    }
}

const buttons = document.querySelectorAll('.botao'); //vai percorrer tudo com o id botao
    buttons.forEach(button => { 
        button.addEventListener('click', () =>{ //vai dar uma função pra cada botao
            if (button.id == "clear"){
                visor.innerText = ' ';
            }else if (button.id == "igual"){
                const expressao = visor.innerText 
                const resultado = calcularexpressao(expressao)
                visor.innerText = resultado
            }else{
                visor.innerText += button.innerText
            }
        } );
    });


    /*O codigo começa com o const buttons percorrendo todos os id com 
botao

faz um buttons.foreach(button => {

dps faz um AEL ('click', () =>{.....} pra falar o que cada botao deve fazer

adiciona um if para o clear, visor.innerText = ' ';

um else if para igual onde vai adicionar a expressao=visor.innerText e um const resultado = funcao da expressao e mais um visor.innerText = resultado para mostrar o texto do resultado

ai para finalizar um visor.innertext += button.innerText; que vai pegar o texto */ 