import { Router } from 'express'
import TaskController from '../../controllers/image.controller'

const taskRoutes = Router()

taskRoutes.post('/', TaskController.store)

export default taskRoutes