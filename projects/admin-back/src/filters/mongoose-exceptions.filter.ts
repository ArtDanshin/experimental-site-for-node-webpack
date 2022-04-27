import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus
} from '@nestjs/common';
import { Error as MongooseError } from 'mongoose';

import ValidationError = MongooseError.ValidationError;

@Catch(ValidationError)
export class MongoValidationExeptionFilter implements ExceptionFilter {
  // eslint-disable-next-line class-methods-use-this
  catch(exception: ValidationError, host: ArgumentsHost) {
    const failedFields = Object.keys(exception.errors);
    const response = host.switchToHttp().getResponse();

    return response.status(HttpStatus.UNPROCESSABLE_ENTITY).json({
      statusCode: HttpStatus.UNPROCESSABLE_ENTITY,
      message: `Неверно заполнены поля: ${failedFields.join(', ')}`,
      errors: exception.errors,
    });
  }
}
