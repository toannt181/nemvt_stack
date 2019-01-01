import BaseController from './BaseController'
import CustomerServices from '@/services/CustomerServices'

export default class CustomerController extends BaseController {
  constructor() {
    super()
    this.router.get('/', this.getCustomers)
  }

  async getCustomers(req, res, next) {
    const { query } = req
    try {
      const limit = Number(query.limit)
      const page = Number(query.page)
      if (!limit || !page) throw new Error('Customer params error')
      const customers = await CustomerServices.getCustomers({ limit, offset: (page - 1) * limit })
      res.json({ data: { customers } })
    } catch (error) {
      console.log('ERR', error)
      next(new Error('Failed to load customers'))
    }
  }
}
