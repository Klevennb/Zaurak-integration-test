const testServer = require('supertest');
const app = require('../server');

test('It should respond 200 to LOGOUT route', () => {
  return testServer(app).post('/api/user/logout').then( (response) => {
    expect(response.statusCode).toBe(200)
  })
})

test('IT should protect /user ', () => {
  return testServer(app).get('/api/user').then( (response) => {
    expect(response.statusCode).toBe(403);
  })
});

test('it should allow logged in users access', () => {
   let agent = testServer.agent(app);

   return agent
   .post('/api/user/login')
   .send({username: 'dane', password: '1234'})
   .then( (response) => {
     expect(response.statusCode).toBe(200);
     return agent.get('/api/user').then( (userResponse) => {
      expect(userResponse.statusCode).toBe(200);
    })
   })
})

