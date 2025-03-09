import { Router } from 'express'
import imageRoutes from './image/image.routes'

const routes = Router()

routes.use('/image', imageRoutes)

export default routes