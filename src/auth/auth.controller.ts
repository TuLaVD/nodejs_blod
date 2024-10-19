// src/auth/auth.controller.ts  

import { Controller, Post, Body } from '@nestjs/common';  
import { AuthService } from './auth.service';  
import { User } from '../users/user.entity';  

@Controller('auth')  
export class AuthController {  
  constructor(private authService: AuthService) {}  

  @Post('login')  
  async login(@Body('username') username: string, @Body('password') password: string): Promise<User | null> {  
    return this.authService.validateUser(username, password);  
  }  
}
