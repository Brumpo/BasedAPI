
exports.seed = function(knex, Promise) {
  return knex('users').insert([
    {id: 1, email: 'buts@tt.com',firstName:'Bevis',lastName:'buttface',password:'$2a$06$xwhki217XWrWz4JRejJHyOFaMYp12/UeT03TV3Y1nXWNF87fd5b/e'},
    {id: 2, email: 'schroder@gmail.com',firstName:'Luke',lastName:'schroder',password:'$2a$06$/t8V5o1SRD3giMSJH/zaruc.DukOW8zbaB6I.KgRiz6tbOgOJ6WsO'},
    {id: 3, email: 'brent@gmail.com',firstName:'Brent',lastName:'schroder',password:'$2a$06$a/pM2svI5ynZS/rXC1R9COF8/g5iA3Z6mZVXY1MkdeptmD8DPB8FC'},
    {id: 4, email: 'phil@gmail.com',firstName:'Phil',lastName:'schroder',password:'$2a$06$CWeMFE.dsLHp1R/V9pBwk.ffnsVJqPUvkqfPyTaor4aDJA.aNrzoG'},
    {id: 5, email: 'lilb@gmail.com',firstName:'lil b',lastName:'basedgod',password:'$2a$06$ot/Nz4l43Pzw0SZmtL.0UeKtDM.LAWgm/urCkU9PpQ4CVevEweXde'}
  ]).then(
    ()=>knex.raw("SELECT setval('users_id_seq', (SELECT MAX(id) FROM users))")
  )
}
