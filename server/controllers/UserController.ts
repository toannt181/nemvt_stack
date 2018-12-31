import BaseController from './BaseController'
import UserServices from '@/services/UserServices'

export default class UserController extends BaseController {
  constructor() {
    super()
    this.router.get('/auth-user', this.getAuthUser)
  }

  async getAuthUser(req, res, next) {
    try {
      const { id } = req.user
      const user = await UserServices.findUser({ id })
      res.json({ data: user })
    } catch (error) {
      next(new Error('Failed to load user'))
    }
  }
}
