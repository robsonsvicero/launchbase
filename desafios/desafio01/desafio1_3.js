// const usuarios = [
//   { nome: 'Carlos', tecnologias: ['HTML', 'CSS'] },
//   { nome: 'Jasmine', tecnologias: ['JavaScript', 'CSS'] },
//   { nome: 'Tuane', tecnologias: ['HTML', 'Node.js'] }
// ]

// for (let usuario of usuarios) {
//   console.log(`${usuario.nome} trabalha com ${usuario.tecnologias.join(', ')}.`)
// }


// function checaSeUsuarioUsaCSS(usuario) {
//   // Percorra o array de tecnologias do usuário até encontrar se ele trabalha com CSS
//   for (let tecnologia of usuario.tecnologias) {
//     if (tecnologia == 'CSS')
//     // SE encontrar, retorne true da função, caso contrário retorne false
//       return true
//   }
//   return false
// }

// for (let i = 0; i < usuarios.length; i++) {
//   const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i]);

//   if (usuarioTrabalhaComCSS) {
//     console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`);
//   }
// }

const usuarios = [{
    nome: 'Salvio',
    receitas: [115.3, 48.7, 98.3, 14.5],
    despesas: [85.3, 13.5, 19.9]
  },
  {
    nome: 'Marcio',
    receitas: [24.6, 214.3, 45.3],
    despesas: [185.3, 12.1, 120.0]
  },
  {
    nome: 'Lucia',
    receitas: [9.8, 120.3, 340.2, 45.3],
    despesas: [450.2, 29.9]
  }
]

function calculaSaldo(receitas, despesas) {
  const somaReceitas = somaNumeros(receitas)
  const somaDespesas = somaNumeros(despesas)
  return somaReceitas - somaDespesas
}

function somaNumeros(numeros) {
  // Soma todos números dentro do array 'numeros'
  let soma = 0
  for (let numero of numeros) {
    soma = soma + numero
  }
  return soma
}

for (let usuario of usuarios) {
  const saldo = calculaSaldo(usuario.receitas, usuario.despesas)

  if (saldo > 0) {
    console.log(`${usuario.nome} possui saldo positivo de ${saldo.toFixed(2)}.`)
  } else {
    console.log(`${usuario.nome} possui saldo negativo de ${saldo.toFixed(2)}.`)
  }
}