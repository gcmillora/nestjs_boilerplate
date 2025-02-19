import { ApiProperty } from '@nestjs/swagger';
import { IsArray } from 'class-validator';

/**
 * @fileoverview Provides a standardized response structure for API endpoints.
 *
 * @description
 * This file contains the ResponseDto class, which serves as a wrapper for all API responses.
 * It standardizes the response format across the entire application by ensuring each response
 * includes a status code and a typed body. This consistent structure simplifies client-side
 * response handling and maintains API uniformity.
 *
 * @example
 * ```typescript
 * // Example usage
 * const response = new ResponseDto(200, { data: 'example' });
 * // Results in: { statusCode: 200, body: { data: 'example' } }
 * ```
 */

export class ResponseDto<T> {
  @IsArray()
  readonly body: T;

  @ApiProperty()
  statusCode!: number;

  constructor(statusCode: number, body: T) {
    this.statusCode = statusCode;
    this.body = body;
  }
}
