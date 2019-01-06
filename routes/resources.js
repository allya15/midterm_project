// "use strict";

// const express = require('express');
// const router  = express.Router();

// module.exports = (knex) => {

//   router.post("/", (req, res) => {
//     //route for adding a new resource
//     const newResource = {
//       //creates new resource object to be entered in database
//       user_id: req.session.userid,
//       'URL': req.body.URL,
//       title: req.body.title,
//       description: req.body.description
//     }
//     //separate arrays for new and pre-existing categories are sent from client
//     //has validation for if one of the arrays is empty
//     let categories = req.body.categories;
//     let newCategories = categories ? req.body.categories.new : [];
//     let categoryIDs = categories ? req.body.categories.old : [];
//     if (!categoryIDs) {
//       categoryIDs = [];
//     }
//     let resource_id
//     let promises = [];
//     //wait for all new categories to be added to categories table before inserting into resource_categories table
//     if (newCategories) {
//       newCategories.forEach((category) => {
//         promises.push(knex('categories').insert({name: category})
//           .returning('id')
//           .then((result) => {
//             categoryIDs.push(result[0]);
//             return result[0];
//           }));
//       })
//     }
//     //wait for new resource to be entered in table before adding to resource_categories table
//     promises.push(knex('urls')
//           .insert(newResource)
//           .returning('id')
//           .then((result) => {
//             resource_id = result[0];
//           }));
//     //when both steps complete, link resource, category and user in resource_categories table
//     Promise.all(promises)
//       .then((result) => {
//         console.log('ID hopefully, ', resource_id);
//         console.log('categoryIDs, ', categoryIDs);
//         categoryIDs.forEach((category) => {
//           knex('topics')
//             .insert({'url_id': url_id, 'user_id': req.session.user.id, 'category_id': Number(category)})
//             .then((result) => {
//               console.log('put in new category_resource');
//             })
//         })
//       })
//       .then((result) => {
//         console.log('sending response');
//         res.json(resource_id);
//         res.status(200);
//         res.send();
//       })



//   });


//   router.get("/", (req, res) => {
//     //route to get data for all resources in database
//     knex('urls')
//       //query to return an array of all resources
//       .join('users', 'users.id', '=', 'urls.user_id')
//       .select('urls.id AS url_id', 'urls.URL', 'urlss.title', 'urls.description',
//         'user_id', 'users.user_name', 'users.avatar_URL')
//       .orderBy('url_id')
//       //loop through array of resources and add the ratings property to each, containing an array of all ratings
//       .then( (results) => {
//         let promises = [];
//         for (let resource of results) {
//           //push each query (which returns a promise) to the empty promise array
//           promises.push(knex('ratings')
//             .select()
//             .where('url_id', resource.url_id)
//             .then((ratings) => {
//               resource['ratings'] = ratings;
//               //value to be added to promise array
//               return resource;
//             }));
//         }
//         //when all promises are complete, return promises array
//         return Promise.all(promises);
//       })
//       .then((results) => {
//         //same for likes
//         let promises = [];
//         for (let resource of results) {
//           promises.push(knex('likes')
//             .select()
//             .where('url_id', resource.resource_id)
//             .then((likes) => {
//               //console.log(results);
//               resource['likes'] = likes;
//               return resource;
//             }));
//         }
//         return Promise.all(promises);
//       })
//       .then((results) => {
//         //same for comments
//         let promises = [];
//         for (let resource of results) {
//           promises.push(knex('comments')
//             .select()
//             .where('url_id', resource.resource_id)
//             .then((comments) => {
//               //console.log(results);
//               resource['comments'] = comments.length;
//               return resource;
//             }));
//         }
//         return Promise.all(promises);
//       })
//       .then((results) => {
//         //same for categories
//         let promises = [];
//         for (let resource of results) {
//           promises.push(
//             knex('topics')
//               .join('categories', 'categories.id', '=', 'resources_categories.category_id')
//               .select('categories.id', 'categories.name', 'resources_categories.user_id')
//               .where('resources_categories.resource_id', resource.resource_id)
//               .then((categories) => {
//                 resource['categories'] = categories;
//                 return resource;
//               })
//           );
//         }
//         return Promise.all(promises);
//       })
//       .then((results) => {
//         //returns an array of resource objects that have attached arrays for ratings, likes and categories
//         //and an integer for number of comments
//         res.status(200).send(results);
//       })
//       .catch( (err) => {
//         throw err;
//       })

//   });

//   router.get("/:resource_id", (req, res) => {
//     const resource_id = req.params.resource_id;
//     knex('resources')
//       //query to return one resource object for a given resource id
//       .join('users', 'users.id', '=', 'resources.user_id')
//       .select('resources.id AS resource_id', 'resources.URL', 'resources.title', 'resources.description',
//         'user_id', 'users.user_name', 'users.avatar_URL')
//       .where('resources.id', resource_id)
//       //loop through array of resources and add the a ratings property to each, containing an array of all ratings
//       .then( (results) => {
//         let promises = [];
//         for (let resource of results) {
//           //push each query (which returns a promise) to the empty promise array
//           promises.push(knex('ratings')
//             .select()
//             .where('resource_id', resource.resource_id)
//             .then((ratings) => {
//               resource['ratings'] = ratings;
//               //value to be added to promise array
//               return resource;
//             }));
//         }
//         //when all promises are complete, return promises array
//         return Promise.all(promises);
//       })
//       .then((results) => {
//         //same for likes
//         let promises = [];
//         for (let resource of results) {
//           promises.push(knex('likes')
//             .select()
//             .where('resource_id', resource.resource_id)
//             .then((likes) => {
//               //console.log(results);
//               resource['likes'] = likes;
//               return resource;
//             }));
//         }
//         return Promise.all(promises);
//       })
//       .then((results) => {
//         //same for categories
//         let promises = [];
//         for (let resource of results) {
//           promises.push(
//             knex('resources_categories')
//               .join('categories', 'categories.id', '=', 'resources_categories.category_id')
//               .select('categories.id', 'categories.name', 'resources_categories.user_id')
//               .where('resources_categories.resource_id', resource_id)
//               .then((categories) => {
//                 resource['categories'] = categories;
//                 return resource;
//               })
//           );
//         }
//         return Promise.all(promises);
//       })
//       .then((results) => {
//         res.status(200).send(results);
//       })
//       .catch( (err) => {
//         throw err;
//       })

//   });

//   return router;
// }
