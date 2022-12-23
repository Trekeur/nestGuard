import { Controller, Get } from '@nestjs/common';
import { SessionService } from './session.service';

@Controller('session')
export class SessionController {
    constructor(private sessionService: SessionService){}

    @Get()
    getUrlSession(){
        return  this.sessionService.urlApiSessionService();
    }
}
