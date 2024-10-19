import { Injectable } from '@nestjs/common';  
import { User } from './user.entity';  
import * as bcrypt from 'bcryptjs';  

@Injectable()  
export class UsersService {  
  private users: User[] = [];  
  private idCounter = 1;  

  create(user: User): User {  
    const hashedPassword = bcrypt.hashSync(user.password, 10);  
    const newUser = { ...user, id: this.idCounter++, password: hashedPassword };  
    this.users.push(newUser);  
    return newUser;  
  }  

  findAll(): User[] {  
    return this.users;  
  }  

  findOne(username: string): User {  
    return this.users.find(user => user.username === username);  
  }  
}