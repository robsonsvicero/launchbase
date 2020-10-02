// const usuario = {
//   nome: "Diego Schell",
//   empresa: {
//     nome: "Rocketseat",
//     cor: "roxo",
//     foco: "programação",
//     endereco: {
//       rua: "Guilherme Gembala",
//       numero: 260
//     }
//   }
// }

// console.log(`A empresa ${usuario.empresa.nome} está localizada na Rua ${usuario.empresa.endereco.rua}, ${usuario.empresa.endereco.numero}`)


const usuario = {
  nome: 'Carlos',
  idade: 32,
  tecnologias: [
    { nome: 'C++', especialidade: 'Desktop' },
    { nome: 'Python', especialidade: 'Data Science' },
    { nome: 'JavaScript', especialidade: 'Web/Mobile' }
  ]
}

console.log(`O usuário ${usuario.nome} tem ${usuario.idade} anos e usa a tecnologia ${usuario.tecnologias[0].nome} com especialidade em ${usuario.tecnologias[0].especialidade}.
`)