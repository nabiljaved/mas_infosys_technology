const bcrypt = require('bcryptjs');

const users = [

  {   
    email: 'admin@masinfosys.com',
    password: bcrypt.hashSync('123456', 10),
  },
  { 
    email: 'nabeel@masinfosys.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    email: 'ali@masinfosys.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    email: 'pushparaj@masinfosys.com',
    password: bcrypt.hashSync('123456', 10),
  },

]

module.exports = users;