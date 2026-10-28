function menor(){
    alert("Sistema de verificação de valor");
    let valor = Number(prompt("Digite o valor"))

    if(valor < 756.5){
        alert("Você está isento");
    }else{
        alert("Você receberá uma taxa de 10%");
    }
}

function maior(){
    alert("Bem vindo ao sistema de notas!");
    let nota = Number(prompt("Digite sua nota"))

    if(nota > 5){
        alert("Você foi aprovado!");
    }else{
        alert("Você foi reprovado!")
    }
}

function diferente(){
    alert("Bem vindo ao sistema de comparação de cores!")
    let cor1 = prompt("Digite a primeira cor");
    let cor2 = prompt("Digite a segunda cor");

    if(cor1 !== cor2){
        alert("Falso");
    }else{
        alert("Verdadeiro");
    }   
}

function menorIgual(){
    alert("Bem vindo, digite um valor para multiplicá-lo por 100");
    let valor = Number(prompt("Digite um valor"));

    if(valor <= 1){
        alert("Seu valor é muito baixo, não será possível multiplicá-lo");
    }else{
        alert(`O valor ${valor} X 100 é igual a ${valor*100}`);
    }
}

function menorIgual2(){
    alert("Bem vindo, faça uma consulta no seu valor");

    let valor = Number(prompt("Digite um valor"));

    if(valor <= 3.5){
        alert("O valor está barato")
    }else{
        alert(`Seu valor: ${valor}`)
    }
}

function igual(){
    alert("Bem vindo, adivinhe o nome secreto")
    let nome = prompt("Digite o nome");

    if(nome === "Marisa"){
        alert("Acertou!")
    }else{
        alert("Errou!")
    }
}