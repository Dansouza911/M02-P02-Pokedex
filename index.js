import express from "express";
import path from "path";

const __dirname = path.resolve(path.dirname(""));

const app = express();
const port = 3000 || "https://git.heroku.com/pokedex-projeto2.git"

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("index", {
    pokedex,
  });
});

app.get("/detalhes/:id", (req, res) => {
  let poke = [];
  pokedex.filter((Element) => {
    if (Element.id == req.params.id) poke.push(Element);
  });
  res.render("detalhes.ejs", {
    poke,
  });
});
app.get;

app.get("/cadastro", (req, res) => {
  res.render("cadastro.ejs");
});

app.post("/cadastro", (req, res) => {
  const pokemon = req.body;
  pokemon.id = pokedex.length + 1;
  pokedex.push(pokemon);
  res.redirect("/");
});

/* app.post('/cadastro', (req, res) => {
  let i = cavaleiros[cavaleiros.length-1].id + 1
  const { nome, signos, tipo, iframe, img  } = req.body
  cavaleiros.push({id: i, nome, signos, tipo, iframe, img})
  console.log(cavaleiros)
  res.redirect('/')
}) */

app.listen(3000, () =>
  console.log("Servidor rodando em http://localhost:3000")
);

let pokedex = [
  {
    id: 1,
    nome: "Bulbasaur",
    tipo: "Grass",
    descricao:
      "Há uma semente de planta nas costas desde o dia em que este Pokémon nasce. A semente cresce lentamente.",

    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    altura: "0,7m",
    peso: "6,9kg",
    categoria: "Semente",
    habilidade: "Overgrow",
  },
  {
    id: 2,
    nome: "Charmander ",
    tipo: "Fire",
    descricao:
      "Tem preferência por coisas quentes. Quando chove, diz-se que o vapor jorra da ponta de sua cauda.",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
    altura: "0,6m",
    peso: "8,5kg",
    categoria: "Lagarto",
    habilidade: "Fire",
  },

  {
    id: 3,
    nome: "Squirtle  ",
    tipo: "Water",
    descricao:
      "Quando retrai seu longo pescoço em sua concha, esguicha água com força vigorosa.",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
    altura: "0,5m",
    peso: "9kg",
    categoria: "Tartaruga",
    habilidade: "Torrent",
  },

  {
    id: 4,
    nome: "Chikorita ",
    tipo: "Grass",
    descricao:
      "Na batalha, Chikorita agita sua folha para manter o inimigo afastado. No entanto, uma fragrância doce também emana da folha, acalmando o Pokémon em luta e criando uma atmosfera acolhedora e amigável ao redor.",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/152.png",
    altura: "0,9m",
    peso: "6,4kg",
    categoria: "Folha",
    habilidade: "Overgrow",
  },
  {
    id: 5,
    nome: "Cyndaquil  ",
    tipo: "Fire",
    descricao:
      "Cyndaquil se protege acendendo as chamas em suas costas. As chamas são vigorosas se o Pokémon estiver com raiva. No entanto, se estiver cansado, as chamas crepitam irregularmente com combustão incompleta. ",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/155.png",
    altura: "0,5m",
    peso: "7,9kg",
    categoria: "Rato de fogo",
    habilidade: "Fire",
  },
  {
    id: 6,
    nome: "Totodile   ",
    tipo: "Water",
    descricao:
      "Apesar da pequenez de seu corpo, as mandíbulas de Totodile são muito poderosas. Embora o Pokémon possa pensar que está apenas beliscando de brincadeira, sua mordida tem poder suficiente para causar ferimentos graves.",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/158.png",
    altura: "0,6m",
    peso: "9,5kg",
    categoria: "Mandíbula Grande",
    habilidade: "Torrent",
  },
  {
    id: 7,
    nome: "Turtwig ",
    tipo: "Grass",
    descricao:
      "A fotossíntese ocorre em todo o seu corpo sob o sol. A concha em suas costas é, na verdade, solo endurecido.",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/387.png",
    altura: "0,4m",
    peso: "10,2kg",
    categoria: "Folha",
    habilidade: "Overgrow",
  },
  {
    id: 8,
    nome: "Chimchar  ",
    tipo: "Fire",
    descricao:
      "Sua extremidade traseira ardente é alimentada por gás feito em sua barriga. Nem a chuva pode apagar o fogo.",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/390.png",
    altura: "0,5m",
    peso: "6,2kg",
    categoria: "Chimpanzé",
    habilidade: "Fire",
  },
  {
    id: 9,
    nome: "Piplup   ",
    tipo: "Water",
    descricao:
      "Não gosta de ser cuidado. É difícil se relacionar com ele, pois não ouve seu treinador.",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/393.png",
    altura: "0,4m",
    peso: "5,2kg",
    categoria: "Pinguin",
    habilidade: "Torrent",
  },
];
