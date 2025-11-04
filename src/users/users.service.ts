import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  loadDogs(): string[] {
    console.log(1122);
    return ['1', '2', '3'];
  }

  findOne(id: number): number {
    return id;
  }
}
