import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt } from "passport-jwt";
import { Strategy } from "passport-local";
import { environments } from "src/environments/environments";



@Injectable()
export class JwsStrategy extends PassportStrategy(Strategy, "jwt"){
    constructor(){
        super({
            //↓ l'approche standard consistant à fournir un jeton de support dans l'en-tête d'autorisation de nos requêtes AP
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            //↓ JWT expiré, la demande sera refusée et une 401 Unauthorize
            ignoreExpiration: false,
            //↓ fournir un secret symétrique pour signer le jeton
            secretOrKey: environments.jwtConstantsSecretKey.secret,
        });
    }

    async validate(payload: any){
        console.log(payload)
        await { userId: payload.sub, username: payload.username}; 

    
    }
}