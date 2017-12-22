'use strict'

module.exports={
  test:{
    client: 'pg',
    connection:'postgres://localhost/based_test',
    migration:{
      connection:'./migrations'
    },
    seed:{
      connection: './seeds'
    }
  },
  development:{
    client: 'pg',
    connection:'postgres://localhost/based_dev',
    migration:{
      connection:'./migrations'
    },
    seed:{
      connection: './seeds'
    }
  },
  production:{
    client: 'pg',
    connection:process.env.DATABASEURL,
    migration:{
      connection:'./migrations'
    },
    seed:{
      connection: './seeds'
    }
  },
}
