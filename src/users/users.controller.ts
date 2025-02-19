import { Controller, Get, Param } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { UserDto } from 'utils/dto/user/user.dto';
import { ResponseDto } from 'utils/dto/response/response.dto';

@Controller('users')
@ApiTags('User')
@ApiBearerAuth('JWT')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/email/:email')
  @ApiOperation({ summary: 'Get user by email' })
  async getUserByEmail(
    @Param('email') email: string,
  ): Promise<ResponseDto<UserDto>> {
    return this.usersService.getUserByEmail(email);
  }
}
