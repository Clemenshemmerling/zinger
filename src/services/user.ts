import { Injectable } from "@angular/core";
import { Status, User } from "../interfaces/user";

@Injectable()

export class UserService {
    constructor() {
        console.log(status);
    }

    private users: User[] = [
        {
            nick: 'Clemens',
            subnick: 'Clele',
            age: 32,
            email: 'cle@gmail.com',
            status: Status.Offline,
            friend: true,
            uid: 1
        },
        
        {
            nick: 'Roberto',
            subnick: 'Lechon',
            age: 30,
            email: 'lechon@gmail.com',
            status: Status.Online,
            friend: true,
            uid: 2
        },
        
        {
            nick: 'Claudio',
            subnick: 'Pollo',
            age: 31,
            email: 'pollo@gmail.com',
            status: Status.Away,
            friend: false,
            uid: 3
        },
        
        {
            nick: 'Willia',
            subnick: 'Coche',
            age: 31,
            email: 'Coche@gmail.com',
            status: Status.Busy,
            friend: true,
            uid: 4
        },
          
        {
            nick: 'Isaac',
            subnick: 'isa',
            age: 31,
            email: 'isa@gmail.com',
            status: Status.Online,
            friend: false,
            uid: 5
        } 
    ];
    
    get() {
        return this.users;
    }

    add(user: User) {
        this.users.push(user);
    }
}
