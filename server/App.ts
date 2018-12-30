import * as express from 'express'
import * as morgan from 'morgan'
import * as bodyParser from 'body-parser'
import * as cors from 'cors'

import DB from '@/configs/DB'
import Routers from '@/configs/Routers'

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
    this.app.use(cors())
    this.app.use(bodyParser.json())
    this.app.use(bodyParser.urlencoded({ extended: true }))
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
    this.app.use('/api', Routers)

    // ERROR handler
    // this.app.use((err, req, res) => {
    //   res.status(err.status || 500)
    //   res.json({
    //     error: err.message,
    //     code: err.status || 500,
    //   })
    // })
  }
}

export default new App().app
