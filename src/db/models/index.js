const { Usuario, UsuariosSchema } = require('./Usuarios.model');

function setupModels(sequelize) {
    Person.init( UsuarioSchema,  Usuario.config(sequelize));
}

module.exports = setupModels;
