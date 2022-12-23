import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { falseBdd } from '../falseBdd';

@Injectable()
export class AuthService {
    constructor(private falseBdd: falseBdd, private jwtService: JwtService) {
    }


    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.falseBdd.findOne(username);
        if (user && user.password === pass) {
            const { password, ...result } = user;
            console.log(user)
            //[ ... ]syntaxe qui permet de récupérer les éléments du tableau result sans avoir à les énumérer
            return result;
        }
        return null;
    }



    async login(user: { username: string; password: string }) {
        const payload = { username: user.username };
        console.log(payload)
        console.log(user)
        //retourne le service de cryptage ↓
        return {
            access_token: this.jwtService.sign(payload),
        };

    }
}
