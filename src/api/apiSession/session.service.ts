import { HttpService } from '@nestjs/axios';
import { ForbiddenException, Injectable } from '@nestjs/common';
import { catchError, map, Observable } from 'rxjs';
import { environments } from 'src/environments/environments';
import { ModelSession } from './apiSession.model';

@Injectable()
export class SessionService {
    constructor(private httpSession: HttpService) { }

    urlApiSessionService(): Observable<ModelSession[]> {
        
        return this.httpSession.get<ModelSession[]>(environments.urlSession, environments.authorizationKey)
            .pipe(
                map((res) => res.data ),
                catchError(() => 
                {throw new ForbiddenException("Error Session Api");
            }))
    }
}
