'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Users', [{
            name: 'carlos',
            email: 'ejemplo@gmail.com',
            password: '$2a$10$z/nY4/3enG6u.Ljrr2.yluxPKn9pGpro711TE8Ya3SGq0xk66lReS',
            createdAt: new Date(),
            updatedAt: new Date()
        }]);
    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Users', null, {});

    }
};