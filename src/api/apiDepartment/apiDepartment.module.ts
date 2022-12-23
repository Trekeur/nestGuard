import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ApiController } from './apiDepartment.controller';
import { ApiService } from './apiDepartment.service';

@Module({
  exports: [],
  imports: [HttpModule],
  controllers: [ApiController],
  providers: [ApiService]
})
export class ApiDepartmentModule {}
