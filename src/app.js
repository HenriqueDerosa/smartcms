import { resolve } from 'path'
import express from 'express'
import routes from './routes'
import hbsConfig from './admin'
import adminRoutes from './admin/routes'

import './database'

class App {
  constructor() {
    this.server = express()

    this.middlewares()
    this.routes()
  }

  middlewares() {
    this.server.use(express.json())
  }

  routes() {
    const viewPath = resolve(__dirname, 'admin', 'views')

    this.server.engine('.hbs', hbsConfig.engine)
    this.server.set('views', viewPath)
    this.server.set('view engine', '.hbs')
    this.server.use(express.static(viewPath))

    this.server.use('/admin', adminRoutes)

    this.server.use(routes)
  }
}

export default new App().server
