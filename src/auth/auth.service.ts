// src/auth/auth.service.ts  

import { Injectable } from '@nestjs/common';  
import { UsersService } from '../users/users.service';  
import { User } from '../users/user.entity';  
import * as bcrypt from 'bcryptjs'; // hoặc 'bcrypt'  

@Injectable()  
export class AuthService {  
  constructor(private usersService: UsersService) {}  

  async validateUser(username: string, password: string): Promise<User | null> {  
    const users = await this.usersService.findAll();  
    const user = users.find(u => u.username === username);  

    if (user && await bcrypt.compare(password, user.password)) {  
      return user;  
    }  
    return null;  
  }  
}