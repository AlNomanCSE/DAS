class User {
  username: string;
  email: string;
  password: string;

  constructor(username: string, email: string, password: string) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
  encryptionPasswrod() {
    return `${this.password}`;
  }
  userNameUppercase() {
    return `${this.username.toUpperCase()}`;
  }
}
interface User {
  getEmail(): string;
}
// Object.assign(User.prototype, {
//   getEmai() {
//     return `${this.email}`;
//   },
// });
const user = new User("Noman", "adnjad@gmail.com", "123123nk412#");

const consttant = {
  email: "adkahbd@com.adk",
  password: "sfcabd1231fcaadak",
  username: "noman369",
  fullName: "A B D Noman",
};

console.log(consttant.);
