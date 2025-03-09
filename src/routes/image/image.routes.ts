import { Router } from 'express'
import ImageController from '../../controllers/image.controller'

const imageRoutes = Router()

imageRoutes.post('/save', ImageController.store)
imageRoutes.get('/list', ImageController.index)
imageRoutes.put('/update/:id', ImageController.update)
imageRoutes.delete('/delete/:id', ImageController.delete)


export default imageRoutes