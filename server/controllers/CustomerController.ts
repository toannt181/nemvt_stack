import BaseController from './BaseController'
import CustomerServices from '@/services/CustomerServices'

export default class CustomerController extends BaseController {
  constructor() {
    super()
    this.router.get('/', this.getCustomers)
    this.router.delete('/:id', this.deleteCustomer)
    this.router.post('/', this.createCustomer)
  }

  async getCustomers(req, res, next) {
    const { query } = req
    try {
      const limit = Number(query.limit)
      const page = Number(query.page)
      const sort = Number(query.sort)
      const order = Number(query.order)
      if (!limit || !page || !sort) throw new Error('Customer params error')
      const customers = await CustomerServices.getCustomers({
        limit,
        offset: (page - 1) * limit,
        sort,
        order,
      })
      res.json({ data: { customers } })
    } catch (error) {
      console.log('ERR', error)
      next(new Error('Failed to load customers'))
    }
  }

  async deleteCustomer(req, res, next) {
    try {
      const id = Number(req.params.id)
      if (!id) throw new Error('Cannot get id customer')
      await CustomerServices.deleteCustomer({ id })
      res.json({ message: 200 })
    } catch (error) {
      console.log('ERR', error)
      next(new Error('Failed to delete customer'))
    }
  }

  async createCustomer(req, res, next) {
    try {
      const { body } = req
      const customer = await CustomerServices.createCustomer(body)
      res.json({ data: customer })
    } catch (error) {
      console.log('ERR', error)
      next(new Error('Failed to create customer'))
    }
  }
}
