import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { User } from './users.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor( private usersService : UsersService){}
    @Get()
    getUsers(){
        return this.usersService.findAll() 
    }

    @Post()
    postUser(@Body() body: User){
        return this.usersService.create(body)
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.usersService.remove(id);
    }
}
