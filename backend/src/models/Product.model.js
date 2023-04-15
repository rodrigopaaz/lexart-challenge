module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    "Product",
    {
      id: {
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      title: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      categoryId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      siteId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      price: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      imageUrl: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    { timestamps: false, underscored: true, tableName: "products" }
  );
  Product.associate = (models) => {
    Product.belongsTo(models.Site, { foreignKey: "siteId", as: "site" });
    Product.belongsTo(models.Category, {
      foreignKey: "CategoryId",
      as: "category",
    });
  };
  return Product;
};
