
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('students')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        { name: 'David', cohort_id: '1'},
        { name: 'Carlos', cohort_id: '1'},
        { name: 'Spencer', cohort_id: '1'}
      ]);
    });
};
