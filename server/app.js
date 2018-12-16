const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

//allow cross-origin request
app.use(cors());

// connect to mlab database
mongoose.connect("mongodb://reagankg:shainashmone3@ds163683.mlab.com:63683/graphql", { useNewUrlParser: true });
mongoose.connection.once('open', () => {
    console.log('database connected');
})

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql:true
}));

app.listen(4000,()=>{
    console.log('connected in port 4000....')
});


