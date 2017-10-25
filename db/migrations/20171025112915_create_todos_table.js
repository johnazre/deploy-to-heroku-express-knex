exports.up = function(knex, Promise) {
  return knex.schema.createTable('todos', function(table) {
    table.increments();
    table.string('title');
    table.string('description')
    table.boolean('completed').defaultsTo(false)
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('todos');
};