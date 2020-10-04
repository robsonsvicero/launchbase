//Exportar funções para 
//CREATE
exports.post = function(req, res) {
  // Validando se todos os dados estão preenchidos
  const keys = Object.keys(req.body)

  for (key of keys) {
    //req.body.avatar_url
    if (req.body[key] == "")
      return res.send("Please, fill all fields!")

  }
  return res.send(req.body)
}

//UPDATE


//DELETE