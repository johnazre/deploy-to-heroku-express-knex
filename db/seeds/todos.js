
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        {title: 'laundry', description: 'work'},
        {title: 'workout', description: 'less worky'},
        {title: 'play video games', description: 'no worky'}
      ]);
    });
};
