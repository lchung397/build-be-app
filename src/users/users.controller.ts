import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './users.pipe';
import { AuthGuard } from 'src/guard/check.guard';
import { LoggingInterceptor } from 'src/interception/interceptor';
import { User } from 'src/decorator/user.decorator';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @UseInterceptors(LoggingInterceptor)
  @UseGuards(AuthGuard)
  @Get()
  loadDog(): string[] {
    return this.userService.loadDogs();
  }

  @Get('profile')
  getProfile(@User() user: any) {
    console.log(user);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return { id: 1 };
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return `12444 ${this.userService.findOne(id)}`
  }

  @Post()
  createUser(@Body() body: CreateUserDto) {
    return body;
  }
}
