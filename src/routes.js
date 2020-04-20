import { Router } from 'express'
import User from './app/models/User'
import UserController from './app/controllers/UserController'

const routes = Router()

routes.get('/', async (req, res) => {
  return res.json({ hello: 'hello' })
})

routes.get('/user', UserController.index)
routes.post('/user', UserController.store)

export default routes
