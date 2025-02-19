import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserDto } from 'utils/dto/user/user.dto';

@Injectable()
export class UsersLibService {
  constructor(private readonly prisma: PrismaService) {}

  private logger = new Logger('UsersLibService');

  async getUserByEmail(email: string): Promise<UserDto | null> {
    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    return user;
  }

  async findUserByEmail(email: string): Promise<UserDto> {
    const user = await this.getUserByEmail(email);

    if (!user) {
      this.logger.warn(`User with email ${email} not found`);
      throw new NotFoundException('User not found');
    }

    return user;
  }
}
