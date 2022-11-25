class User {
  constructor(id, firstName, lastName, phone) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
  }

  static fromObject(data) {
    return new User(
      data['id'],
      data['firstName'],
      data['lastName'],
      data['phone'],
    );
  }

  getId() {
    return this.id;
  }

  getFirstName() {
    return this.firstName;
  }

  getLastName() {
    return this.lastName;
  }

  getPhone() {
    return this.phone;
  }

  toString() {
    return JSON.stringify({
      id: this.id,
      firstName: this.firstName,
      lastName: this.lastName,
      phone: this.phone,
    });
  }
}
