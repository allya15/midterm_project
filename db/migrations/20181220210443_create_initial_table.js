
exports.up = function(knex, Promise) {


  const createURLsTable = knex.schema.createTable('urls', function(table) {
        table.increments();
        table.string('title');
        table.string('url');
        table.integer('user_id');
        table.foreign('user_id').references('users.id');
        table.string('description');
        table.string('dateAdded');
        table.string('image');
        table.string('rating');
      }).return();

  const createTopicsTable = createURLsTable
    .then(() => {
      return knex.schema.createTable('topics', function(table) {
        table.increments();
        table.string('topic');
        table.integer('url_id');
        table.foreign('url_id').references('urls.id');
      })
    })

  const createRatingsTable =  createURLsTable
    .then(() => {
      return knex.schema.createTable('ratings', function(table) {
        table.increments();
        table.float('rated');
        table.integer('user_id');
        table.foreign('user_id').references('users.id');
        table.integer('url_id');
        table.foreign('url_id').references('urls.id');
      })
    });

  const createCommentsTable = createURLsTable
    .then(() => {
      return knex.schema.createTable('comments', function(table) {
        table.increments();
        table.string('comment');
        table.integer('user_id');
        table.foreign('user_id').references('users.id');
        table.integer('url_id');
        table.foreign('url_id').references('urls.id');
        table.string('date');
        table.string('author');
      })
    });

  const createLikesTable = createURLsTable
    .then(() => {
      return knex.schema.createTable('likes', function(table) {
        table.increments();
        table.integer('liked');
        table.integer('user_id');
        table.foreign('user_id').references('users.id');
        table.integer('url_id');
        table.foreign('url_id').references('urls.id');
      })
    });

  return Promise.all([
    createURLsTable,
    createTopicsTable,
    createRatingsTable,
    createCommentsTable,
    createLikesTable
  ]);

};


exports.down = function(knex, Promise) {
  const dropLikesTable = knex.schema.dropTable('likes').return();
  const dropCommentsTable = knex.schema.dropTable('comments').return();
  const dropRatingsTable = knex.schema.dropTable('ratings').return();
  const dropTopicsTable = knex.schema.dropTable('topics').return();
  const dropURLsTable = Promise.all([dropLikesTable, dropCommentsTable, dropRatingsTable, dropTopicsTable])
    .then(() => knex.schema.dropTable('urls'));

  return Promise.all([
    dropLikesTable,
    dropCommentsTable,
    dropRatingsTable,
    dropTopicsTable,
    dropURLsTable,
  ])

};
