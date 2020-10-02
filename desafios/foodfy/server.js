const express = require('express')
const nunjucks = require('nunjucks')
const receitas = require('./data')

const server = express()

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
  express: server,
  autoescape: false,
  noCache: true
})

server.get("/", function(req, res) {
  return res.render("index")
})

server.get("/receitas", function(req, res) {
  return res.render("receitas", { items: receitas })
})

server.get("/recipe/:id", function(req, res) {
  const id = req.params.id
    // console.log(receitas[id])

  return res.render("recipe", { item: receitas[id] })
})

server.get("/sobre", function(req, res) {
  return res.render("sobre")
})

server.listen(5000, function() {
  console.log("server is running!")
})