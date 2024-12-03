import { Router } from "express";
import MusicaController from "../controllers/MusicasController.js";

const musicaRouter = Router();

musicaRouter.get("/", MusicaController.getAllMusics);

musicaRouter.post("/create", MusicaController.createMusic);

musicaRouter.get("/info/:id", MusicaController.getMusicById);

musicaRouter.put("/edit/:id", MusicaController.updateMusic);

musicaRouter.delete("/delete/:id", MusicaController.deleteMusic);

export default musicaRouter;