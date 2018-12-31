import * as Sequelize from 'sequelize'
import DB from '../configs/DB'

export default DB.define('users', {
  email: {
    type: Sequelize.STRING,
    unique: true,
  },
  role: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 1,
  },
  password: Sequelize.STRING,
  access_token: Sequelize.STRING,
})
