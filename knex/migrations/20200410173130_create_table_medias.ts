import * as Knex from 'knex';
import { CreateTableBuilder } from 'knex';

const TABLE_NAME = 'medias';

export async function up({ schema }: Knex): Promise<any> {
  try {
    const tableExists = await schema.hasTable(TABLE_NAME);

    if (!tableExists) {
      return await schema.createTable(TABLE_NAME, (table: CreateTableBuilder) => {
        table.increments().primary();
        table.string('media_url').notNullable();

        table.integer('tweet_id').notNullable();
        table.timestamps(true, true);
      });
    }
  } catch (e) {
    throw e;
  }
}

export async function down({ schema }: Knex): Promise<any> {
  try {
    const tableExists = await schema.hasTable(TABLE_NAME);

    if (tableExists) {
      return await schema.dropTableIfExists(TABLE_NAME);
    }
  } catch (e) {
    throw e;
  }
}

exports.config = { transaction: false };