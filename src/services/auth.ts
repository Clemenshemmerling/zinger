import { Injectable } from "@angular/core";
import {AngularFireAuth} from "angularfire2/auth";

@Injectable()

export class AuthService {
    constructor(private afAuth: AngularFireAuth) {

    }

    registerEmail(email, password) {
        return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
    }

    LoginEmail(email, password) {
        return this.afAuth.auth.signInWithEmailAndPassword(email, password);
    }

    getStatus() {
        return this.afAuth.authState;
    }

    logout() {
        return this.afAuth.auth.signOut();
    }
}