import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ForbiddenException } from '@nestjs/common/exceptions';
import { catchError, map, Observable } from 'rxjs';
import { environments } from 'src/environments/environments';
import { ModelDepartement } from './apiDepartment.model';

@Injectable()
export class ApiService {
    constructor(private httpDepartmentService: HttpService) { }

    urlApiDepartmentService(): Observable<ModelDepartement[]> {
        // exemple ↓
        // return this.httpService.get('https://api.coindesk.com/v1/bpi/currentprice.json')
        // .pipe( 
        //     map((res) => res.data?.bpi),
        //     map((bpi) => bpi?.usd),
        //     map((usd) => { return usd?.rate;}),)
        // .pipe(
        //     catchError(() => {
        //         throw new ForbiddenException('API NOT available');
        //     })
        // );

        return this.httpDepartmentService.get<ModelDepartement[]>(environments.urlGouv).pipe(
            map((res) => res.data), 
            catchError(() => {
                throw new ForbiddenException('ERROR DEPARTMENT API');
            })
        )


    }
}


