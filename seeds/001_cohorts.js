
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cohorts')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cohorts').insert([
        { name: 'WEB19'},
        { name: 'WEB18'},
        { name: 'WEB17'}
      ]);
    });
};
