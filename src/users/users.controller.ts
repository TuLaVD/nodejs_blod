// src/users/users.controller.ts  

import {  
    Controller,  
    Get,  
    Post,  
    Body,  
    Param,  
    Delete,  
    Put,  
  } from '@nestjs/common';  
  import { UsersService } from './users.service';  
  import { User } from './user.entity';  
  
  @Controller('users')  
  export class UsersController {  
    constructor(private readonly usersService: UsersService) {}  
  
    @Post()  
    create(  
      @Body('username') username: string,  
      @Body('password') password: string,  
    ): Promise<User> {  
      return this.usersService.create(username, password);  
    }  
  
    @Get()  
    findAll(): Promise<User[]> {  
      return this.usersService.findAll();  
    }  
  
    @Get(':id')  
    findOne(@Param('id') id: number): Promise<User> {  
      return this.usersService.findOne(id);  
    }  
  
    @Put(':id')  
    update(  
      @Param('id') id: number,  
      @Body('username') username: string,  
      @Body('password') password: string,  
    ): Promise<User> {  
      return this.usersService.update(id, username, password);  
    }  
  
    @Delete(':id')  
    remove(@Param('id') id: number): Promise<void> {  
      return this.usersService.remove(id);  
    }  
  }