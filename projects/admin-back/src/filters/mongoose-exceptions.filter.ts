import {
  ArgumentsHost,
  Catch,
  ExceptionFilter
} from '@nestjs/common';
import { Error } from 'mongoose';

import ValidationError = Error.ValidationError;

@Catch(ValidationError)
export class MongoValidationExeptionFilter implements ExceptionFilter {
  // eslint-disable-next-line class-methods-use-this
  catch(exception: ValidationError, host: ArgumentsHost) {
    const failedFields = Object.keys(exception.errors);
    const response = host.switchToHttp().getResponse();

    return response.status(422).json({
      statusCode: 422,
      message: `Неверно заполнены поля: ${failedFields.join(', ')}`,
      errors: exception.errors,
    });
  }
}
