import * as Sequelize from 'sequelize'
import DB from '../configs/DB'

export default DB.define('users', {
  email: {
    type: Sequelize.STRING,
    unique: true,
  },
  password: Sequelize.STRING,
})
