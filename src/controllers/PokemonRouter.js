import { Router, router } from "express"
import PokemonContorller from "./PokemonController.js";

const pokemomRouter = Router();

pokemomRouter.get("/", PokemonContorller.getPokemon);
pokemomRouter.post("create", PokemonContorller.createPokemon);
pokemomRouter.delete("/delete/:id", PokemonContorller.deletePokemon);

export default pokemomRouter