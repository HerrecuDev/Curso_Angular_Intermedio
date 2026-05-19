import { Injectable } from '@angular/core';
import { User } from '../models/user.models';


//Componente
@Injectable({
  providedIn: 'root',
})
export class UserService {
  // Atributo privado users que contiene un User[]
    private users: User[] = [
        {
            id: 1,
            name: 'Tony Stark',
            email: 'tony@stark.com',
            active: false
        },
        {
            id: 2,
            name: 'Steve Rogers',
            email: 'steve@shield.com',
            active: true
        }
    ];

    // Retornamos el array completo de users
    getUsers(): User[] {
        return this.users;
    }

	// Retornamos el User por la id indicada o undefined si no existe
    getUserById(id: number): User | undefined {
        for (let user of this.users) {
            if (user.id === id) {
                return user;
            }
        }
        return undefined;
    }
}
