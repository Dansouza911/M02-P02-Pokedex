import express from "express";
import path from "path";

const __dirname = path.resolve(path.dirname(""));

const app = express();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.render("index", {
    pokedex,
  });
});


app.get("/home", (req, res) => {
  res.send("Olá mundo do express!");
});

app.get('/cadastro', (req,res) => {
  res.render('cadastro.ejs')
})

app.post("/add", (req, res) => {
  const pokemon = req.body;
  pokemon.id = pokedex.length + 1;
pokedex.push(pokemon);
  res.redirect("/");

});

app.listen(3000, () =>
  console.log("Servidor rodando em http://localhost:3000")
);

let pokedex = [
  {
    id: 1,
    nome: "Bulbasaur",
    tipo: "Grass",
    imagem: "https://img.pokemondb.net/sprites/home/normal/bulbasaur.png",
  },
  {
    id: 2,
    nome: "Charmander ",
    tipo: "Fire",
    imagem: "https://img.pokemondb.net/sprites/home/normal/charmander.png",
  },
  {
    id: 3,
    nome: "Squirtle  ",
    tipo: "Water",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
  },

  {
    id: 4,
    nome: "Chikorita ",
    tipo: "Grass",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/152.png",
  },
  {
    id: 5,
    nome: "Cyndaquil  ",
    tipo: "Fire",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/155.png",
  },
  {
    id: 6,
    nome: "Totodile   ",
    tipo: "Water",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/158.png",
  },
  {
    id: 7,
    nome: "Turtwig ",
    tipo: "Grass",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/387.png",
  },
  {
    id: 8,
    nome: "Chimchar  ",
    tipo: "Fire",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/390.png",
  },
  {
    id: 9,
    nome: "Piplup   ",
    tipo: "Water",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/393.png",
  },
   
];
