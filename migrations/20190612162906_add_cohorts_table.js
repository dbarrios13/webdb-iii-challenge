
exports.up = function(knex, Promise) {
  return knex.schema.createTable('cohorts', tbl => {
    // id: primary key, auto-increment
    tbl
        .increments()
    // name: text required
    tbl
        .string('name', 128)
        .notNullable()
        .unique()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('cohorts')
};
