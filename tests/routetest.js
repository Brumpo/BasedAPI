const assert = require('assert')
const routes = require('../routes/routes.js')
const request = require('supertest')
const server = require('../server.js')
const bcrypt = require('bcrypt')
const addDatabaseHooks = require('./utils')
const { suite, test } = require('mocha')

suite('part2 routes', addDatabaseHooks(() => {
  test('GET/ tweets', function(done) {
    request(server)
      .get('/tweets')
      .set('Accept', 'application/json')
      .expect(200,{},done)
});
  test('GET /tweets/:id', function(done) {
    request(server)
      .get('/tweets/2')
      .set('Accept', 'application/json')
      .expect((res) => {
        delete res.body.created_at
        delete res.body.updated_at
        delete res.body.id})
      .expect(200,{name:'Bohemian Biergarten',
      address:'2017 13th St Boulder, CO 80302',
      phonenumber:'720-328-8328',
      description:'Casual / Late Night Eats / Night Spots',
      lat: "40.018719",
      lng: "-105.279125",
      url:'http://www.bohemianbiergarten.com/',
      picture:'http://yourboulder.com/wp-content/uploads/2013/10/bohemian-biergarten-boulder.jpg',
      happyHourMenu:'Daily 3 - 6pm, Monday & Sunday: 9pm - Close | Food & Drink Combos: $12 Half Litre Bier and regular Sausage OR Pierogies OR Pretzel Sausage OR Side Salad OR Goulash Boat, $14 Half Litre Bier and One Special Sausage of your choice | Drinks: $1 off .5L, $2 off 1L, $3 Well Drinks, $1 off wine, Tuesday: $8 Das Boot all day, Wednesday: $2 off House Wine'
      },done)
});
//   test('GET /favorites/:id', function(done) {
//     request(server)
//       .get('/favorites/1') //must update manually
//       .set('Accept', 'application/json')
//       .expect((res) => {
//         res.body.map((resi)=>{
//           delete resi.created_at
//           delete resi.updated_at
//           delete resi.averageRating
//         })
//       })
//       .expect(200,[ { id: 2,
//     rating: 3,
//     user_id: 1,
//     restaurant_id: 2,
//     name: 'Arcana Restaurant',
//     address: '909 Walnut St Boulder, CO 80302',
//     phonenumber: '303-444-3885',
//     lat: "40.016256",
//     lng: "-105.283216",
//     description: 'Contemporary / Fine Dining',
//     url: 'http://arcanarestaurant.com/',
//     picture: 'http://lifestylepubs.wordpress.s3-us-west-2.amazonaws.com/app/uploads/prod/2016/03/2G7A8475.jpg',
//     happyHourMenu: 'Daily 5 - 6pm | $3 Beer, $4 Cider, $5 Wine, $7 West Side Daiquiri, American 75 and BBQ Old Fashioned. $6 Shot & a Beer, $7 Crispy Pork Rinds, Arcana Wings, Bon Bon and Macaron Plate, $8 Grilled Head Cheese'
//     } ],done)
// });
  test('POST /user', function(done) {
    request(server)
      .post('/user/')
      .set('Accept', 'application/json')
      .send({email:'lilb@gmail.com', password: 'i am lil b'})
      .expect(200,{id:5},done)
});
  test('POST /users/', function(done) {
    request(server)
      .post('/users/')
      .set('Accept', 'application/json')
      .send({
        firstName:'Brian',
        lastName:'kracha',
        email:'brai@gmail.com',
        password: 'butts123'
      })
      .expect(204,{},done)
});
//   test('POST /favorites/', function(done) {
//     request(server)
//       .post('/favorites/')
//       .send({
//         restId:13,
//         userId:4
//       })
//       .set('Accept', 'application/json')
//       .expect(201,{},done)
// });
//   test('DELETE /favorites/:id/:id', function(done) {
//     request(server)
//       .delete('/favorites/2/4')
//       .set('Accept', 'application/json')
//       .expect(200,{},done)
// });
//   test('PUT /favorites/', function(done) {
//     request(server)
//       .put('/favorites/')
//       .set('Accept', 'application/json')
//       .send({
//         userId:3,
//         restId:2,
//         rating:3})
//       .expect(200,{},done)
//   });
}));
