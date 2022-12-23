import { Injectable } from "@nestjs/common";
import { Strategy } from "passport-local";
// import { Strategy } from "passport-jwt";
import { PassportStrategy } from "@nestjs/passport";
import { AuthService } from "../../auth/auth.service";
import { UnauthorizedException } from "@nestjs/common/exceptions";
import { ContextIdFactory, ModuleRef } from "@nestjs/core";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService, /* private moduleRef: ModuleRef*/ ) {
        super({
            // passReqToCallback: true,
        });
    }
    async validate(username: string, password: string,/* request: Request*/): Promise<void> {
        // const contextId = ContextIdFactory.getByRequest(request);
        // await this.moduleRef.resolve(AuthService, contextId);

        //-
        const user = await this.authService.validateUser(username, password)
        if (!user) {
            throw new UnauthorizedException("Bad password !");
        }
        return user;
    }

}