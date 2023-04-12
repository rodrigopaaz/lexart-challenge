// src/models/freeMarcket.model.js
module.exports = (sequelize, DataTypes) => {
    const Buscape = sequelize.define('buscape', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      description: DataTypes.STRING,
      category: DataTypes.STRING,
      price: DataTypes.FLOAT,
      image: DataTypes.STRING },
    {
      timestamps: false,
      tableName: 'buscape',
      underscored: true,
    });

    return Buscape;
  };