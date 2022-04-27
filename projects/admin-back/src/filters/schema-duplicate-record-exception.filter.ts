import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus
} from '@nestjs/common';

import { SchemaDuplicateRecordException } from './exceptions/schema-duplicate-record';

@Catch(SchemaDuplicateRecordException)
export class SchemaDuplicateRecordExceptionFilter implements ExceptionFilter {
  // eslint-disable-next-line class-methods-use-this
  catch(exception: SchemaDuplicateRecordException, host: ArgumentsHost): void {
    const response = host.switchToHttp().getResponse();

    return response.status(HttpStatus.UNPROCESSABLE_ENTITY).json({
      statusCode: HttpStatus.UNPROCESSABLE_ENTITY,
      message: 'Поля должны быть уникальными',
      errors: exception.info.keyValue
    });
  }
}
