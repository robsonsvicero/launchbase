// const nome = "Carlos"
// const peso = 94
// const altura = 1.8
// const imc = peso / (altura * altura)

// if (imc >= 30) {
//   console.log(`${nome} você está acima do peso (IMC = ${imc})`)
// } else if (imc < 29.9) {
//   console.log(`${nome} você não está acima do peso (IMC = ${imc})`)
// }

const nome = "Silvana";
const sexo = "F";
const idade = 48;
const contribuicao = 23;

const somaContribuicao = idade + contribuicao

const homemAposentar = (sexo == 'M' && contribuicao >= 35 && somaContribuicao >= 95)
const mulherAposentar = (sexo == 'F' && contribuicao >= 30 && somaContribuicao >= 85)

if (homemAposentar || mulherAposentar) {
  console.log(`${nome}, você pode se aposentar!`)
} else {
  console.log(`${nome}, você não pode se aposentar!`)
}