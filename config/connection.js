const { connect, connection } = require('mongoose');

const connectionString = 'mongodb+srv://rhianna:community@communitycluster.d6uwkbe.mongodb.net/'

connect(connectionString);

module.exports = connection;
