import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { SessionController } from './session.controller';
import { SessionService } from './session.service';

@Module({

  exports: [],
  imports: [HttpModule],
  controllers: [SessionController],
  providers: [SessionService]
})
export class ApiSessionModule {}
