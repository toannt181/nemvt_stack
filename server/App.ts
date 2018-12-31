import * as express from 'express'
import * as morgan from 'morgan'
import * as bodyParser from 'body-parser'
import * as cors from 'cors'

import DB from '@/configs/DB'
import Routers from '@/routers/Routers'
import DetachTokenHeaders from '@/middleware/DetachTokenHeaders'

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
    // this.app.use(DetachTokenHeaders)
    // this.app.use(DetachTokenHeaders)
    // this.app.use(function (req, res, next) {
    //   res.status(404).json({ message: 'die con me roi' })
    //   next()
    // })
    // this.app.use(function (req, res, next) {
    //   next()
    // })
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

    // Response handler
    this.app.use((req, res) => {
      console.error('ERROR 404')
      res.status(404).json({ message: 'error here' })
    })
  }
}

export default new App().app
