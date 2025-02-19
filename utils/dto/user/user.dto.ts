import { ApiProperty } from '@nestjs/swagger';

/**
 * @fileoverview DTO for user entity.
 *
 * @description
 * This file contains the UserDto class, which serves as a DTO for the user entity.
 * It standardizes the user data structure across the entire application by ensuring each user
 * includes a id, uuid, email, and roleId. This consistent structure simplifies client-side
 */

export class UserDto {
  @ApiProperty({ description: 'The id of the user' })
  id: string;

  @ApiProperty({ description: 'The uuid of the user' })
  uuid: string;

  @ApiProperty({ description: 'The email of the user' })
  email: string;

  @ApiProperty({ description: 'The role id of the user' })
  roleId: number;
}
