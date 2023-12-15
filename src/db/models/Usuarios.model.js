const { Model, DataTypes, Sequelize } = require('sequelize');

const PERSON_TABLE = 'persons';

class Usuario extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: PERSON_TABLE,
            modelName: 'Usuarios',
            timestamps: true
        }
    }
} 

const UsuariosSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    nombre: {
        allowNull: false,
        type: DataTypes.STRING,
        field:'name'
    },
    clave:{ 
        allowNull:false,
        type: DataTypes.STRING,
        field: 'clave'
    },
    whatsap:{
        allowNull: true,
        type: DataTypes.INTEGER,
        field: 'whtasap'
    },
    whatsap:{
        allowNull: true,
        type: DataTypes.INTEGER,
        field: 'whtasap'
    }    
}
  
module.exports = { Usuario, UsuariosSchema };