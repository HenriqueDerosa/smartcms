import { Router } from 'express'
import { models } from '../database'
import User from '../app/models/User'

const routes = Router()

routes.get('/', (req, res) => {
  const modelsList = models.map((i) => ({
    name: i.name,
    link: {
      href: `admin/table/${i.tableName}`,
    },
  }))

  return res.render('admin', { modelsList })
})

routes.get('/about', (req, res) => {
  return res.render('about')
})

routes.get('/table/:tablename', async (req, res) => {
  const { tablename } = req.params
  const table = models.find((model) => model.tableName === tablename)
  const keys = Object.keys(table.rawAttributes)
  const options = Object.values(table.rawAttributes)
  const fields = { keys, options: options.map((e) => e.type) }

  const fullContent = await table.findAll()
  const content = fullContent.map((item) => {
    const element = []
    keys.forEach((key) => {
      element.push(item.get(key))
    })
    return element
  })

  return res.render('table', {
    backLink: '/admin',
    tablename,
    fields,
    content,
  })
})

export default routes
