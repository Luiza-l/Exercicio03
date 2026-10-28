function hoppyHappy(){
    alert("Bem vindo ao Hoppy Happy!\nPasse pelo o nosso teste de altura para utilizar o nossos brinquedos");

    let alturaPassageiro = Number(prompt("Digite sua altura"));

    if(alturaPassageiro > 1.50){
        alert("Entrada liberada no brinquedo, divirta-se!");
    }else{
        alert("Entrada bloqueada");
    }
}

function estoque(){
    alert("Bem vindo ao sistema de controle de estoque!");

    let produto  = prompt("Digite o nome do produto que deseja consultar");
    let qtdEstoque = Number(prompt("Digite o estoque disponível para esse produto"));

    if(qtdEstoque < 5){
        alert(`A quantidade de estoque do produto ${produto} está baixo`);
    }else{
        alert(`A quantidade de estoque do produto ${produto} está ok`);
    }
}

