import { Router } from 'express'
import ImageController from '../../controllers/image.controller'

const imageRoutes = Router()

imageRoutes.post('/save', ImageController.store)
imageRoutes.get('/list', ImageController.index)

export default imageRoutes