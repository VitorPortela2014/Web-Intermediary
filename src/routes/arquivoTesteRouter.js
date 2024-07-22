import { Router } from "express"
import arquivoTesteController from "../controllers/arquivoTesteController.js";

const arquivoTesteRouter = Router();

arquivoTesteRouter.get("/", arquivoTesteController.initial);

arquivoTesteRouter.post("/post", arquivoTesteController.post);

arquivoTesteRouter.get("/get", arquivoTesteController.get);

arquivoTesteRouter.put("/put", arquivoTesteController.put);

arquivoTesteRouter.delete("/delete/:id", arquivoTesteController.delete);

export default arquivoTesteRouter;


// Aula 01
// export const teste = (variavel) => {
//     return `${variavel} (Variavel recebida com sucesso do servidor)`
// }