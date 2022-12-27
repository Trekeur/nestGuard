import { Injectable } from '@nestjs/common';


export type User = any;

@Injectable()
export class falseBdd {
 
    private readonly users = [
        {
            usersId: 1,
            username: "robe",
            password: "new",
        },
        {
            usersId: 2,
            username: "delata",
            password: "tuwtuw",
        },
    ]
     findOne( username: string): User | undefined{
        return this.users.find(user => user.username === username);
    }
}
