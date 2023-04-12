module.exports = (sequelize, DataTypes) => {

    const Product = sequelize.define('Product',
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
          category_id: {
            allowNull: false,
            type: DataTypes.INTEGER,
          },
          site_id: {
            allowNull: false,
            type: DataTypes.INTEGER,
          },
          price: {
            allowNull: false,
            type: DataTypes.FLOAT,
          },
          image_url: {
            allowNull: false,
            type: DataTypes.STRING,
          }
    },
    {timestamps: false,
      underscored: true,
     tableName: 'products'    
    }
    );
    Product.associate = (models) => {
      Product.belongsTo(models.Site, { foreignKey: 'siteId', as: 'site'});
      Product.belongsTo(models.Category, { foreignKey: 'CategoryId', as: 'category'});

    }; 
    return Product
}