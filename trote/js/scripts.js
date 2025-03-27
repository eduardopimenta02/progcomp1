function calcular(){
    // declaração variavel sem tipo
    let soma = 0
    // recupera o valor da ação social digitando
    let acaoSocial = document.getElementById("acaoSocial").value
    soma = soma + Number(acaoSocial)
    //recupera o valor da homenagem digitado
    let homenagem = document.getElementById("homenagem").value
    soma = soma + Number (homenagem)
    //recupera a quantidade de litros de leite
    let leite = document.getElementById("leite").value
    soma = soma + (2 * Number(leite))
    // recupera a quantidade de kits avulsos
    let kitAvulso = document.getElementById("kitAvulso").value 
    soma = soma + ( 30 * Number(kitAvulso))
    // recupera a quantidade de suplementos avulsos 
    let suplementoAvulso = document.getElementById("suplementoAvulso").value
    soma = soma + (15 * Number(suplementoAvulso))
    // recupera a quantidade de arroz 5kg
    let arroz5kg = document.getElementById("arroz5kg").value 
    soma = soma + ( 5 * Number(arroz5kg))
    // recupera a quantidade de arroz 1kg
    let arroz1kg = document.getElementById("arroz1kg").value
    soma = soma + (1 * Number(arroz1kg)) 
    // recupera a quantidade de feijao 2kg
    let feijao2kg = document.getElementById("feijao2kg").value
    soma = soma + ( 2 * Number(feijao2kg))
    // recupera a quantidade de feijao 1kg
    let feijao1kg = document.getElementById("feijao1kg").value
    soma = soma + ( 1* Number(feijao1kg))
    // devolve o resultado para o HTML
    document.getElementById("soma").innerHTML = soma.toFixed(2)
    
}