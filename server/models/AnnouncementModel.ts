import * as Sequelize from 'sequelize'
import DB from '../configs/DB'

export default DB.define('announcements', {
  title: {
    type: Sequelize.STRING
  },
  content: {
    type: Sequelize.TEXT
  },
})
