export default class User {
  constructor(email, password, name = null, sex = null, dateob = null) {
    this.email = email;
    this.password = password;
    this.name = name;
    this.sex = sex;
    this.dateob = dateob;
  }
}