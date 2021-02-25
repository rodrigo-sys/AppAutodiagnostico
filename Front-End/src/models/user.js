export default class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
  constructor(email, password, name, sex, dateob) {
    this.email = email;
    this.password = password;
    this.name = name;
    this.sex = sex;
    this.dateob = dateob;
  }
}