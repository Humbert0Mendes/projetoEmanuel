const Voluntarios = require("../models/Voluntarios");

module.exports = {
  async store(req, res) {
    const voluntarioExiste = await Voluntarios.findOne({ nome: nome });

    if (voluntarioExiste) {
      return res.json(voluntarioExiste);
    }

    const { nome, dataNasc, telefone, endereco } = req.body;

    const voluntario = await Voluntarios.create({
      nome,
      dataNasc,
      telefone,
      endereco
    });

    return res.json(voluntario);
  }
};
