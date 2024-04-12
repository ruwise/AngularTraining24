export class User {

    public id: string;
    public first_name: string;
    public last_name: string;
    public email: string;
    public username: string;
    public password: string;

    constructor(id: string, first_name: string, last_name: string, email: string, username: string, password: string) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.username = username;
        this.password = password;
    }

}
