import { Model, DataTypes } from "sequelize";
import { sequelize } from "../instances/pg";

export interface FraseInstancia extends Model {
  id: number;
  frase: string;
  autor: string;
}

export const Frase = sequelize.define<FraseInstancia>(
  "Frase",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    frase: {
      type: DataTypes.STRING,
    },
    autor: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "frases",
    timestamps: false,
  }
);
