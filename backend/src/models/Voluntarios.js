const { Schema, model } = require("mongoose");

const VoluntariosSchema = new Schema(
  {
    nome: {
      type: String,
      required: true
    },
    dataNasc: {
      type: String,
      required: true
    },
    telefone: {
      type: String,
      required: true
    },
    endereco: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = model("Voluntarios", VoluntariosSchema);
