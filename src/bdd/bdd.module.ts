import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/users.entity';

@Module({
    imports: [
        TypeOrmModule.forRoot({
          type: 'mysql',
          host: '127.0.0.1',
          port: 3306,
          username: 'root',
          password: 'root',
          database: 'Users',
          entities: [User],
          synchronize: false,
        })],
        exports: [TypeOrmModule],
 
})
export class BddModule {}
