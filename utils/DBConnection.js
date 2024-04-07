import { Pool } from 'pg';

const pool = new Pool({
    user: 'mydb_owner',
    password: 'JnCkMP16GgRQ',
    host: 'ep-long-unit-a5wtgnce.us-east-2.aws.neon.tech',
    database: 'mydb',
    ssl: {
        sslmode: 'require'
    }
});

export default pool;
