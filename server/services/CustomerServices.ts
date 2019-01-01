import CustomerRepository from '@/repositories/CustomerRepository'
import sequelize from 'sequelize'
export default {
  ATTRIBUTES: ['id', 'name', 'code', 'pic_name', 'updated_at', 'created_at'],

  async findAll(condition) {
    const customers = await CustomerRepository.findAll(condition)
    return customers
  },

  async findOne(condition) {
    const customers = await CustomerRepository.findOne(condition)
    return customers
  },

  async getCustomers(condition) {
    const { limit, offset, sort, order } = condition
    const orderColumn = this.getOrderColumn(sort, order)
    const rawCustomers = await this.findAll({
      limit,
      offset,
      ...orderColumn,
      attributes: [
        'id',
        'name',
        'code',
        'pic_name',
      ],
    })
    const total = await CustomerRepository.findAllWithoutAssociation({
      attributes: [[sequelize.fn('COUNT', sequelize.col('id')), 'total']],
      raw: true,
    })

    const customers = rawCustomers
      .map(customer => customer.get({ plain: true }))
      .map(item => ({
        ...item,
        company: {
          ...item.company,
          diagnosis: 1,
          payroll_design_alert: true,
          rate_of_labor: 3,
          staff_cost: 2,
          status: 1,
          year: 2018,
        },
      }))
    return ({
      data: customers,
      meta: { total: total[0].total }
    })
  },

  async deleteCustomer({ id }) {
    return CustomerRepository.destroy({ where: { id }, })
  },

  async createCustomer(payload) {
    const customer = await CustomerRepository.create(payload)
    return customer.get({ plain: true })
  },

  getOrderColumn(sort, order) {
    const direction = this.getDirection(order)
    if (!direction) return ({})
    const column = this.getColumn(sort)
    return ({
      order: [[column, direction]]
    })
  },

  getDirection(order) {
    switch (order) {
      case 1: return 'ASC'
      case 2: return 'DESC'
      default: return ''
    }
  },

  getColumn(sort) {
    switch (sort) {
      case 5: return 'name'
      case 6: return 'code'
      case 7: return 'pic_name'
      default: return ''
    }
  }
}
