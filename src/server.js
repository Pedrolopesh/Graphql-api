const { GraphQLServer } = require('graphql-yoga');
const path = require('path');
const resolvers = require('./resolvers');

const mongoose = require('mongoose');

mongoose.connect(
    "mongodb+srv://root:root@cluster0.gyfen.mongodb.net/graphql-db?retryWrites=true&w=majority",
    {useNewUrlParser: true}
)

const server = new GraphQLServer({
    typeDefs: path.resolve(__dirname, 'schema.graphql'),
    resolvers: resolvers
});

server.start();