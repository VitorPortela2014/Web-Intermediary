// importando biblioteca
 import axios from 'axios';

 export default class PokemonContorller{

    //Criando função de pegar pokemons
    
    static async getPokemon(req, res) {
        try {
            const pokemons = await axios.get("");
            return res.status(200).json(pokemons.data)
        } catch (error) {
            return res.status(500).json({ massage: "Internal Server Error" })
        }
    }
    // Criando função ade criar pokemons 
    static async createPokemon(req,res) {
        try{

        }catch{
            console.error("Error creating Pokemon",error);
            res.status(500).json({ message: "Internal Server Error"});
        }
    }
    //criando função para deletar pokemons
    static async deletePokemons(res,req) {
        try {
        } catch (error) {
            console.error("Error deleting Pokemon",error);
            res.status(500).json({ message: "Internal Server Error"});

        }  
    }
 }