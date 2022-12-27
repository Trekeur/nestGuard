import { Body, Controller, Request, Post, UseGuards, Get } from "@nestjs/common";
import { JwtAuthGuard } from "../jwt/jwtGuards/jwtGetAuth.guard";
import { LocalAuthGuard } from "../jwt/jwtGuards/localAuth.guard";
import { AuthService } from "./auth.service";


@Controller()
export class AuthController {
    constructor(private authService: AuthService) { }

    @UseGuards(LocalAuthGuard)
    @Post('auth/login')
    async infoLogin(@Request() req: any){
        console.log("je suis req post" + req )
        return this.authService.login(req.user);
    }


    // Test sans Guard fonctionne
    // @Post('auth/login')
    // async infoLogin(@Body() body){
    //     return this.authService.login(body);
    // }


    @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile(@Request() req: any){
        console.log( "Je suis le Get" + req.user)
        return req.user;
    }
}  



//Test sans Guard fonctionne
// @Post('auth/login')
// async infoLogin(@Body() body){
//     return this.authService.login(body);
// }



//test 
//     @UseGuards()
//     @Get()
//     getProfile(@Request() req)  {
//         return req.user;
//     }
    
//     // @UseGuards(AuthGuard("jwt"))
//     // @Get()
//     // findAll(){
//     //     return [];
//     // }