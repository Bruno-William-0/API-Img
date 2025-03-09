import { Request, Response } from 'express'
import Image from '../models/image'
import imageRoutes from '../routes/image/image.routes'

export default class TaskController {
  static async store (req: Request, res: Response) {
    const { url, author, size, resolution } = req.body

    if (!url) {
       res.status(400).json({ error: 'O url é obrigatório' } )
       return
    }

    if (!author) {
        res.status(400).json({ error: 'O autor é obrigatório' } )
        return
     }

     if (!size) {
        res.status(400).json({ error: 'O tamanho é obrigatório' } )
        return
     }

     if (!resolution) {
        res.status(400).json({ error: 'A resolução é obrigatória' } )
        return
     }

    const image = new Image()
    image.url = url 
    image.author = author
    image.size = size
    image.resolution = resolution
    await image.save()

    res.status(201).json(image)
    return
  }

  static async index (req: Request, res: Response) {
   const image = await Image.find()
   res.json(image)
   return
 }

 static async update (req: Request, res: Response) {
   const { id } = req.params
   const { url, author, size, resolution } = req.body

   if(!id || isNaN(Number(id))) {
     res.status(400).json({ error: 'O id é obrigatório' })
     return
   }

   const image = await Image.findOneBy({id: Number(id)})
   if (!image) {
      res.status(404).json({ error: 'Imagem não encontrada' })
      return
   }

   image.url = url || image.url
   image.author = author || image.author
   image.size = size || image.size
   image.resolution = resolution || image.resolution

   await image.save()

   res.json(image) // Vamos retornar a task atualizada
   return
 }

 static async delete (req: Request, res: Response) {
   const { id } = req.params

   if(!id || isNaN(Number(id))) {
     res.status(400).json({ error: 'O id é obrigatório' })
     return
   }

   const image = await Image.findOneBy({id: Number(id)})
   if (!image) {
     res.status(404).json({ error: 'Imagem não encontrada' })
     return
   }

   await image.remove()
   res.status(204).json()
   return
 }
}