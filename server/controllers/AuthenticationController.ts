import BaseController from './BaseController'
import * as bcrypt from 'bcrypt'
import * as jwt from 'jsonwebtoken'
import UserServices from '@/services/UserServices'
export default class AuthenticationController extends BaseController {
  constructor() {
    super()
    this.router.post('/login', this.login)
    this.router.post('/logout', this.logout)
  }

  login = async (req, res) => {
    const { body } = req
    const { email, password } = body
    const user = await UserServices.loginUser({ email })
    if (!user) {
      res.status = 500
      res.json({ message: 'Cannot find email' })
      return
    }
    const isMatchPassword = await bcrypt.compare(password, user.password)
    if (!isMatchPassword) {
      res.status = 500
      res.json({ message: 'Password was not matched' })
      return
    }
    const access_token = this.generateJWT({
      id: user.id,
      email: user.email,
    })
    await UserServices.updateToken({ id: user.id }, access_token)
    res.json({ data: { access_token } })
  }

  async logout(req, res) {
    res.json({ message: 'OK' })
  }

  async setAuthUser(req, res) {
    const { session } = req
    req.session.userId = Math.random()
    res.json({ id: session.userId })
  }

  generateJWT(payload) {
    return jwt.sign(payload, process.env.SECRET, { expiresIn: 60 * 60 * 100000 })
  }
}
