const bcrypt = require('bcryptjs');
const args = require('yargs').argv;
const text = args.text;
const salt = args.salt;

const hash = bcrypt.hashSync(text, salt);

console.log(hash);