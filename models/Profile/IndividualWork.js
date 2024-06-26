import { DataTypes } from "sequelize";
import sequelize from "../../config/connectingDB.js";

const IndividualWork = sequelize.define(
  "IndividualWork",
  {
    workDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    participant: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    workContent: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    expectedResult: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  { timestamps: false }
);

export default IndividualWork;
