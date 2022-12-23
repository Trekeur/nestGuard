import { Controller, Get } from '@nestjs/common';
import { ApiService } from './apiDepartment.service';

@Controller('department')
export class ApiController {
    constructor(private apiService: ApiService){}
    @Get()
    getApiDepartment(){
        return this.apiService.urlApiDepartmentService();
        // return "bonjour";
    }


}
