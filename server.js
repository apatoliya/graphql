const express = require('express');
const graphqlHTTP = require('express-graphql');
let port = process.env.port || 5000;
const schema = require('./schema');
const cors = require('cors');




let app = express();
app.use(cors());

app.use('/graphql', graphqlHTTP({
      schema: schema,
      graphiql: true
}));

app.listen(port, () => console.log(`server is listening on ${port}`));