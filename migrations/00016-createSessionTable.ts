import { Sql } from 'postgres';

export type Sessions = {
  id: number;
  token: string;
  userId: number;
};

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE sessions (
      id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
      token varchar(100) UNIQUE NOT NULL,
      expiry_timestamp timestamp NOT NULL DEFAULT now() + interval '24 hours',
      user_id integer REFERENCES users (id) ON DELETE cascade
    )
  `;
}

export async function down(sql: Sql) {
  await sql` DROP TABLE sessions `;
}
