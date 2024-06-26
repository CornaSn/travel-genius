import { Sql } from 'postgres';

export type Expertise = {
  expertiseName: string;
};

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE expertise (
      id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      expertise_name varchar(50) NOT NULL
    )
  `;
}

export async function down(sql: Sql) {
  await sql`DROP TABLE expertise`;
}
