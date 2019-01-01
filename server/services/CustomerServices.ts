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
    const { limit, offset } = condition
    const rawCustomers = await this.findAll({
      limit,
      offset,
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
      .map(item => ({ ...item, company: {} }))
    return ({
      data: customers,
      meta: { total: total[0].total }
    })
  },
}
