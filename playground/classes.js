var User = /** @class */ (function () {
    function User(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }
    User.prototype.encryptionPasswrod = function () {
        return "".concat(this.password);
    };
    User.prototype.userNameUppercase = function () {
        return "".concat(this.username.toUpperCase());
    };
    return User;
}());
// Object.assign(User.prototype, {
//   getEmai() {
//     return `${this.email}`;
//   },
// });
var user = new User("Noman", "adnjad@gmail.com", "123123nk412#");
var consttant = {
    email: "adkahbd@com.adk",
    password: "sfcabd1231fcaadak",
    username: "noman369",
    fullName: "A B D Noman",
};
console.log(consttant[1]);
