import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";

@Injectable()

export class UserService {
    constructor(private afDb: AngularFireDatabase) {
        console.log(status);
    }

    getUsers() {
        return this.afDb.list('/users/');
    }

    getUser(uid) {
        return this.afDb.object('/users/' + uid);
    }

    createUser(user) {
        return this.afDb.object('/users/' + user.uid).set(user);
    }

    editUser(user) {
        return this.afDb.object('/users/' + user.uid).set(user);
    }

    deleteUser(user) {
        return this.afDb.object('/users/' + user.uid).remove();
    }

}
