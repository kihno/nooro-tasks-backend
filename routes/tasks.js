const taskRouter = require('express').Router()
import { prisma } from "../prisma/prisma"

taskRouter.get('/', async (req, res) => {
  try {
    const result = await prisma.task.findMany({
      orderBy: [
        {
          completed: 'asc'
        },
        {
          createdAt: 'desc'
        }
      ]
    })
    res.json(result)
  } catch (error) {
    console.error(error)
  }
})

taskRouter.post('/', async (req, res) => {
  try {
    const result = await prisma.task.create({
      data: req.body
    })
    res.json(result)
  } catch (error) {
    console.error(error)
  }
})

taskRouter.get('/:id', async (req, res) => {
  try {
    const result = await prisma.task.findUnique({
      where: {
        id: Number(req.params.id),
      }
    })
    res.json(result)
  } catch (error) {
    console.error(error)
  }
})

taskRouter.put('/:id', async (req, res) => {
  try {
    const result = await prisma.task.update({
      where: {
        id: Number(req.params.id),
      },
      data: req.body
    })
    res.json(result)
  } catch (error) {
    console.error(error)
  }
})

taskRouter.delete('/:id', async (req, res) => {
  try {
    const result = await prisma.task.delete({
      where: {
        id: Number(req.params.id),
      }
    })
    res.json(result)
  } catch (error) {
    console.error(error)
  }
})

module.exports = taskRouter
