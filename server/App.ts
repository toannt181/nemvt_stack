import * as express from 'express'
import CustomerRoute from './routes/CustomerRoute'

class App {
  public app: express.Application

  constructor() {
    this.app = express()
    this.mountedRoute()
  }

  private mountedRoute(): void {
    this.app.use('/customers', new CustomerRoute().router)
  }
}

export default new App().app