import * as express from 'express'
import * as morgan from 'morgan'
import * as bodyParser from 'body-parser'
import * as cors from 'cors'
import * as session from 'express-session'

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
    this.app.use(session({
      secret: 'workhard',
      resave: true,
      saveUninitialized: false
    }))

    // Access the session as req.session
    this.app.get('/', function (req, res, next) {
      if (req.session.views) {
        req.session.views++
        res.setHeader('Content-Type', 'text/html')
        res.write('<p>views: ' + req.session.views + '</p>')
        res.write('<p>expires in: ' + (req.session.cookie.maxAge / 1000) + 's</p>')
        res.end()
      } else {
        req.session.views = 1
        res.end('welcome to the session demo. refresh!')
      }
    })
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
    // this.app.use((err, req, res) => {
    //   if (err) {
    //     console.log(err, 'ha')
    //   }
    // })
  }
}

export default new App().app
