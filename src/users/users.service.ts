import { UsersLibService } from '@app/users';
import { Injectable } from '@nestjs/common';
import { ResponseDto } from 'utils/dto/response/response.dto';
import { UserDto } from 'utils/dto/user/user.dto';

@Injectable()
export class UsersService {
  constructor(private userLibService: UsersLibService) {}

  async getUserByEmail(email: string): Promise<ResponseDto<UserDto>> {
    const user = await this.userLibService.getUserByEmail(email);

    return new ResponseDto<UserDto>(201, user);
  }
}
