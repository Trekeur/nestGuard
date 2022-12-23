import { Controller, Get } from '@nestjs/common';
import { ApiSitesService } from './apiSites.service';

@Controller('sites')
export class ApiSitesController {
    constructor(private apiSitesService: ApiSitesService){}

    @Get()
    getUrlSites(){
        return this.apiSitesService.urlApiSitesServices();
    }
}
