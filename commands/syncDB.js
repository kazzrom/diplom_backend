import sequelize from "../config/connectingDB.js";
import User from "../models/User.js";

sequelize.sync({ alter: true });
