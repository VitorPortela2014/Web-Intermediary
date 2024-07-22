class arquivoTesteController {
    static async initial(req, res) {
        return res.json({ message: "O Controller do ar esta mandando uma mensagem" })
    }
    static async get(req, res) {
        return res.json({ message: "Olá! Eu sou o get. Meu objetivo e te trazer coisas. O que precisa? " })
    }
    static async post(req, res) {
        const name = req.body;
        return res.json({ message: `Olá ${name}! Eu sou o post. Meu objetivo e criar algo novo como a variavel nome que te pedi agora` })
    }
    static async put(req, res) {
        const { dados } = req.body;
        return res.json({ message: `Olá! Eu sou o put. Meu objetivo e editar as coisas por exemplo estes dados aqui: ${dados}` })
    }
    static async delete(req, res) {
        const { id } = req.params;
        return res.json({ message: `Olá! Eu sou o delete. Meu objetivo e deletar as coisas. Vou deletar esse id que voce mandou:${id}` })
    }
}


export default arquivoTesteController