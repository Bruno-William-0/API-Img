import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, Int32 } from 'typeorm'

@Entity()
export default class Image extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  url!: string

  @Column()
  author!: string

  @Column()
  size!: number
  
  @Column()
  resolution!: string
}