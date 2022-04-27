type MongoDuplicateError = {
  code: 11000;
  keyPattern: { [key in string]: any }
  keyValue: { [key in string]: any }
};

export class SchemaDuplicateRecordException extends Error {
  constructor(public info: MongoDuplicateError) {
    super();
  }
}
