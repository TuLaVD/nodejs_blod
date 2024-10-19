// src/users/users.service.ts  

// Đảm bảo rằng imports đúng  
import { Injectable } from '@nestjs/common';  
import { User } from './user.entity';  
// Thêm import UserRepository nếu cần  
import { InjectRepository } from '@nestjs/typeorm';  
import { Repository } from 'typeorm';  

@Injectable()  
export class UsersService {  
  constructor(  
    @InjectRepository(User)  
    private usersRepository: Repository<User>,  
  ) {}  

  async create(username: string, password: string): Promise<User> {  
    const user = this.usersRepository.create({ username, password });  
    return this.usersRepository.save(user);  
  }  

  async findAll(): Promise<User[]> {  
    return this.usersRepository.find();  
  }  

  async findOne(id: number): Promise<User> {  
    return this.usersRepository.findOne({ where: { id } });  
  }  

  async update(id: number, username: string, password: string): Promise<User> {  
    const user = await this.findOne(id);  
    if (user) {  
      user.username = username;  
      user.password = password; // Nên mã hóa password trước khi lưu  
      return this.usersRepository.save(user);  
    }  
    throw new Error('User not found');  
  }  

  async remove(id: number): Promise<void> {  
    await this.usersRepository.delete(id);  
  }  
}