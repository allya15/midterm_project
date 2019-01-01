exports.up = function(knex, Promise) {

  return knex.schema.createTable('users', function (table) {
    table.increments();
    table.string('username');
    table.string('email');
    table.string('password')
    table.string('firstName');
    table.string('lastName');
  });

};

exports.down = function(knex, Promise) {

  return knex.schema.dropTable('users');
  
};