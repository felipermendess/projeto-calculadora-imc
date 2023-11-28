
function calcularImc(){

    let weight = document.getElementById('weight')
    let height = document.getElementById('height')
    let output = document.getElementById('output-number')
    const value = document.getElementById('value')
   
    if(weight.value.length === 0 || weight.value == 0 || height.value.length === 0  || height.value == 0){

        alert("Números inválidos ou dados não inseridos!")

    }else{
        let w = weight.value
        let h = height.value
        
        //IMC = Peso ÷ (Altura × Altura)
        const imc = (w / (h * h)).toFixed(2)
        let description = ''
        document.getElementById('bar').classList.remove('hidden')
        document.getElementById('bar').classList.remove('hidden')
        document.getElementById('output-imc').classList.remove('hidden')
        document.getElementById('info').classList.remove('hidden')

        if(imc < 18.5){
            description = `Cuidado! Você está na faixa de baixo peso.`
        }else if(imc >= 18.5 && imc <= 25){
            description = `Parabéns! Você está na faixa de peso ideal.`
        }else if(imc > 25 && imc <= 30){
            description = `Cuidado! Você está na faixa de sobrepeso.`
        }else if(imc > 30 && imc <= 35){
            description = `Cuidado! Você está na faixa de obesidade moderada.`
        }else if(imc > 35 && imc <= 40){
            description = `Cuidado! Você está na faixa de obesidade severa. `
        }else{
            description = `Cuidado! Você está na faixa de obesidade mórbida.`
        }
    
        value.textContent = imc.replace('.',',')
    
        document.getElementById('description').textContent = description
        
        weight.value = ''
        height.value = ''
        weight.focus()
        height.focus()
    }
    
}