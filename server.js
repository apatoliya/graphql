const express = require('express');
const graphqlHTTP = require('express-graphql');
let port = process.env.port || 5000;
const schema = require('./schema');



let app = express();

app.use('/graphql', graphqlHTTP({
      schema: schema,
      graphiql: true
}));

app.listen(port, () => console.log(`server is listening on ${port}`));