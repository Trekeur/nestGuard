import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

import { ApiSitesController } from './apiSites.controller';
import { ApiSitesService } from './apiSites.service';

@Module({
  exports: [],
  imports:[HttpModule],
  controllers: [ApiSitesController],
  providers: [ApiSitesService],
})
export class ApiSitesModule {}
