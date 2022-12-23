// import { ExecutionContext, Injectable } from "@nestjs/common";
// import { UnauthorizedException } from "@nestjs/common/exceptions";
// import { Reflector } from "@nestjs/core";
// import { AuthGuard } from "@nestjs/passport";
// import { IS_PUBLIC_KEY } from "../guardAuth.decorator";

// @Injectable()
// export class JwtAuthGuard extends AuthGuard('jwt') {
//     constructor(private reflector: Reflector) {
//         super({});
//     }

//     canActive(context: ExecutionContext){
//         const isPublic = this.reflector.getAllAndOverride<boolean>(
//             IS_PUBLIC_KEY, [
//                 context.getHandler(),
//                 context.getClass(),
//         ]);
//         if (isPublic) {
//             return true;
//         }
//         return super.canActivate(context);
//     }

//     handleRequest(err, user){
//         console.log("e")
//         if (err || !user ) {
//             throw err || new UnauthorizedException;
            
//         }
//         return user;
//     }



// }