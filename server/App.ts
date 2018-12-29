import * as express from 'express'
import * as morgan from 'morgan'
import DB from '@/configs/DB'
import CustomerController from '@/controllers/CustomerController'

class App {
  public app: express.Application

  constructor() {
    this.app = express()
    this.startServer()
  }

  private async startServer(): Promise<any> {
    await this.configDatabase()
    this.configExpress()
    this.configRouter()
  }

  private configExpress(): void {
    this.app.use(morgan('tiny'))
  }

  private configDatabase(): Promise<any> {
    return DB
      .authenticate()
      .then(() => {
        console.log('Connection has been established successfully.');
      })
      .catch(err => {
        console.error('Unable to connect to the database:', err);
      })
  }

  private configRouter(): void {
    this.app.use('/customers', new CustomerController().router)
  }
}

export default new App().app
