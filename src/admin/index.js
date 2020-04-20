import { resolve } from 'path'
import exphbs from 'express-handlebars'

const viewPath = resolve(__dirname, '..', 'admin', 'views', 'layouts')
const partialsPath = resolve(__dirname, '..', 'admin', 'views', 'partials')

const hbsConfig = exphbs.create({
  defaultLayout: 'default',
  layoutsDir: viewPath,
  partialsDir: partialsPath,
  extname: '.hbs',
})

export default hbsConfig
