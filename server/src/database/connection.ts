import knex from 'knex';
import knexConfig from '../config/knexConfig';
let config: Object = {};

config = knexConfig[process.env.NODE_ENV || 'production'];

const connection = knex(config);

export default connection;