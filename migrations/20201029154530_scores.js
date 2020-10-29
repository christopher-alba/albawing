
exports.up = function(knex) {
  return knex.schema.createTable('scores', (t) => {
    t.increments('id').primary()
    t.string('name').unique()
    t.decimal('score').defaultsTo(0)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('scores')
};
