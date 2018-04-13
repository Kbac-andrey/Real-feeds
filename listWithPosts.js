module.exports = function () {
  var faker = require("faker");
  var _ = require("lodash");
  return {
    users: _.times(15, function (n) {
      return {
        id: n,
        name: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        avatar: faker.internet.avatar(),
        country: faker.address.country(),
        phoneNumber: faker.phone.phoneNumber(),
        lorem: faker.lorem.paragraphs(),
        title: faker.lorem.slug(),
        dataforpost: faker.date.recent(),
      }
    })
  }
}
