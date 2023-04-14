import express  from "express";
import dotenv from "dotenv"; 
import mustache from "mustache-express";
import path from "path";
import mainRoutes from "./router/index";

//Faz com que possamos utilizar as variáveis de ambiete defininas no arquivo .env 
dotenv.config();

//inicindo o servidor
const server = express();

//configurando a template engine
server.set("view engine", "mustache");
server.set("views", path.join(__dirname,"views"));
server.engine("mustache", mustache());

//Configurando a pasta pública 
server.use(express.static(path.join(__dirname,"../public")));

//Configurações para utilizar as rotas
server.use(mainRoutes);


//Criando a página de NÃO ENCONTRADO 
server.use((req, res) => {
    res.send("Página não encontrada!");
});

//Inicia o servidor na porta da variável de ambiente
server.listen(process.env.PORT);