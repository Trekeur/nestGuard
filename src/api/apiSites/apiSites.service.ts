import { HttpService } from '@nestjs/axios';
import { ForbiddenException, Injectable } from '@nestjs/common';
import { catchError, map, Observable } from 'rxjs';
import { environments } from 'src/environments/environments';
import { ModelSites } from './apiSites.model';

@Injectable()
export class ApiSitesService {
    constructor(private httpSitesService: HttpService) { }

    urlApiSitesServices(): Observable<ModelSites[]> {


        return this.httpSitesService.get<ModelSites[]>(environments.urlSite, environments.authorizationKey)
            .pipe(
                map((res) => res.data),
                catchError(() => {
                    throw new ForbiddenException('ERROR SITES API');
                }))
    }
}
