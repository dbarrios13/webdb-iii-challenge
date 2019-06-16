
exports.up = function(knex, Promise) {
  return knex.schema.createTable('students', tbl => {
    // id pk auto-increments
    tbl
        .increments()
    //name: text required
    tbl
        .string('name', 128)
        .notNullable()
        .unique()
    //cohort_id: references the id from cohorts table
    tbl
        .integer('cohort_id')
        .unsigned()
        .references('id')
        .inTable('cohorts')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('students')
};
