module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert(
      'categories',
      [
        {
          id: 1,
          name: 'celular',
        },
        {
          id: 2,
          name: 'geladeira',
        },
        {
          id: 3,
          name: 'tv',
        },
      ],
      { timestamps: false },
    );
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('categories', null, {});
  },
};
