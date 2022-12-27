import { Module } from '@nestjs/common';
import * as typeorm from '@nestjs/typeorm';
import { ContactTest } from 'src/users/contactTest.entity';
import { User } from 'src/users/users.entity';

@Module({
    imports: [
        typeorm.TypeOrmModule.forRoot({
          type: 'mysql',
          host: '127.0.0.1',
          port: 3306,
          username: 'root',
          password: 'root',
          database: 'Users',
          entities: [User, ContactTest],
          synchronize: true,
        })],
        exports: [typeorm.TypeOrmModule],
 
})
export class BddModule {}
