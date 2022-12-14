/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('user_lessons').del()
  await knex('user_lessons').insert([
    {
      lesson_id: 1,
      lesson_name: 'labels',
      user_id: 1,
      feedback: 'Great lesson!',
      rating: 5,
      completed: true,
    },
  ]);
};