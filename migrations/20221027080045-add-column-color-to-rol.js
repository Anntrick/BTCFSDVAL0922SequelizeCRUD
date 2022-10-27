module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([

        queryInterface.addColumn('rol', 'color', {
          type: Sequelize.STRING,
          defaultValue: 'Verde'
        }, 
        { transaction: t })

      ])
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('rol', 'color', { transaction: t }),
      ]);
    });
  }
}