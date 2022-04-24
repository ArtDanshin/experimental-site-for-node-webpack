import fs from 'fs';
import openapiTS from 'openapi-typescript';

async function typingsGenerator() {
  const schema = await fs.promises.readFile('../../schemas/admin-api.json', 'utf8');
  const output = await openapiTS(JSON.parse(schema));

  await fs.promises.writeFile('../../schemas/typings/admin-api.ts', output);
}

typingsGenerator();
