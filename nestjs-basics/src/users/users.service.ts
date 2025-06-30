import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  private users: Array<{ id: number; name: string; email: string }> = [];

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    return this.users.find(user => user.id === id);
  }

  create(createUserDto: CreateUserDto) {
    const newUser = { id: Date.now(), ...createUserDto };
    this.users.push(newUser);
    return newUser;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const index = this.users.findIndex(user => user.id === id);
    if (index > -1) {
      this.users[index] = { ...this.users[index], ...updateUserDto };
    }
    return this.users[index];
  }

  remove(id: number) {
    this.users = this.users.filter(user => user.id !== id);
    return { deleted: true };
  }
}