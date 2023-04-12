// src/models/freeMarcket.model.js

module.exports = (sequelize, DataTypes) => {
    const FreeMarket = sequelize.define('freeMarket', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      description: DataTypes.STRING,
      category: DataTypes.STRING,
      price: DataTypes.FLOAT,
      image: DataTypes.STRING },
    {
      timestamps: false,
      tableName: 'freeMarket',
      underscored: true,
    });

    return FreeMarket;
  };