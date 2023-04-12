module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('categories',
      [{
        id: 1,
        name: 'mobile' },
      {
        id: 2,
        name: 'refrigerator'
      },
      {
        id: 3,
        name: 'tv'
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('categories', null, {});
  },
};
