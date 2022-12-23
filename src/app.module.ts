import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ApiDepartmentModule } from './api/apiDepartment/apiDepartment.module';
import { ApiSessionModule } from './api/apiSession/apiSession.module';
import { ApiSitesModule } from './api/apiSites/apiSites.module';
import { UsersModule } from './users/users.module';
import { BddModule } from './bdd/bdd.module';
import { AuthModule } from './auth/auth/auth.module';
import { AuthController } from './auth/auth/auth.controller';

@Module({
  exports: [],
  controllers: [AuthController],
  providers: [],
  imports: [
    BddModule,
    HttpModule,
    ApiDepartmentModule,
    ApiSitesModule,
    ApiSessionModule,
    UsersModule,
    AuthModule,
    
  ],
})
export class AppModule { }
