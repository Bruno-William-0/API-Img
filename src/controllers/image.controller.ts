import { Request, Response } from 'express'
import Image from '../models/image'

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
}