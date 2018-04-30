module.exports = function () {
  var faker = require("faker");
  var _ = require("lodash");
  var articlesn = [];
  return {
    users: _.times(15, function (n) {
      return {
        id: n,
        name: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        avatar: faker.internet.avatar(),
        country: faker.address.country(),
        city: faker.address.city(),
        phoneNumber: faker.phone.phoneNumber(),
        password: faker.internet.password(),
        // lorem: faker.lorem.paragraphs(),
        dateOfBirth: faker.date.past(),
        articles: _.times(22, function (titles) {
          return {
            idTitle: titles,
            title: faker.lorem.slug(),
            lorem: faker.lorem.paragraphs(),
            dataforpost: faker.date.recent(),
            userLikes: []
          }
        })
      }
    })
  }
}
