const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  const task_one = await prisma.task.create({
    data: {
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      color: 'blue',
    }
  })

  const task_two = await prisma.task.create({
    data: {
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      color: 'green'
    }
  })

  const task_three = await prisma.task.create({
    data: {
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      color: 'red'
    }
    
  })

  const task_four = await prisma.task.create({
    data: {
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      color: 'red',
      completed: true
    }
    
  })

  const task_five = await prisma.task.create({
    data: {
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      color: 'green',
      completed: true
    }
    
  })

  const task_six = await prisma.task.create({
    data: {
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      color: 'blue',
      completed: true
    }
    
  })

  console.log({ task_one, task_two, task_three, task_four, task_five, task_six })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
