// Configurando dotenv para variáveis de ambiente
import { config } from "dotenv";
config();

// Importando bibliotecas
import express from "express";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import cors from "cors";
import arquivoTesteController from "./controllers/arquivoTesteController.js";
import { connectDatabase } from "./config/database.js";
import productRouter from "./routes/productRouter.js";
import musicaRouter from "./routes/MusicaRouter.js";
import userRouter from "./routes/userRouter.js";
import pokemomRouter from "./routes/PokemonRouter.js";
import { createServer } from "http";
import { Server } from "socket.io";
import { disconnect } from "process";

// Procurando arquivos
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Criando um servidor express
const app = express();

// Configurando o servidor para aceitar requisições de JSON
app.use(express.json())

// Use o middleware cors
app.use(cors());

const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`socket ${socket.id} connected`);
  console.log("Usuário conectado!", socket.id);
  socket.on("disconnect", (reason) => {
    console.log("Usuário desconectado!", socket.id);
  });
  socket.on("set_username", (username) => {
    socket.data.username = username;
  });
  socket.on("message", (messageData) => {
    io.emit("receive_message", {
      ... messageData,
      authorId: socket.id,
      author: socket.data.username,
    });
  });
});

server.listen(8080, () => {
  console.log("Socket.IO server running on port 8080");
});
// Definindo a porta
const port = process.env.PORT || 4444;

// Middleware para servir arquivos estáticos
app.use(express.static(join(__dirname, "public")));

// Definindo rotas
app.use("/arquivoTeste", arquivoTesteController.initial);
app.use("/products", productRouter);
app.use("/auth",userRouter);
app.use("/musicas",musicaRouter);
app.use("/pokemons", pokemomRouter)


// Função principal para iniciar o servidor
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

connectDatabase();

// Aula 01
// console.log("Testando servidor")
// var texto = teste("Mandando um valor para a variavel do arquivo teste atraves do server")
// console.log(texto);