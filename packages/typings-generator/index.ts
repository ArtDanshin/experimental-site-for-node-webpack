// TODO: Пакет на самом деле не нужен
//  Он тут только из-за ошибки в CLI opentype-typescript
import fs from 'fs';
import openapiTS from 'openapi-typescript';

// TODO: Очень непонятно, как запустить пакет в параметрами из корня монорепы с путями
//  Да к тому же, чтобы еще пути подставлялись относительно монорепы
//  Сейчас вызов происходит с путями от пакета

// TODO:
//  Функция должна принимать путь, брать все файлы из папки и после преобразований
//  складывать их к себе в папку
async function typingsGenerator(inputPath: string, outputPath: string) {
  const schema = await fs.promises.readFile(inputPath, 'utf8');
  const output = await openapiTS(JSON.parse(schema));

  await fs.promises.writeFile(outputPath, output);
}

// eslint-disable-next-line unicorn/prefer-top-level-await
typingsGenerator('../../projects/admin-back/schemas/admin-api.json', '../../projects/admin-front/src/specs/admin-api.ts');
