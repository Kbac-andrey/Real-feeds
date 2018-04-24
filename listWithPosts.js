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
        city: faker.address.city(),
        phoneNumber: faker.phone.phoneNumber(),
        password: faker.internet.password(),
        lorem: faker.lorem.paragraphs(),
        title: faker.lorem.slug(),
        dataforpost: faker.date.recent(),
        dateOfBirth: faker.date.past()
      }
    })
  }
}
