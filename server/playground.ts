const faker = require('faker')

    const list = Array(10).fill(1).map(() => ({
      title: faker.lorem.sentence,
      content: faker.lorem.paragraph,
      created_at: faker.date.past,
      updated_at: faker.date.past,
    }))

    console.log(list)