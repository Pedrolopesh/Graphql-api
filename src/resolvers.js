const Job = require('./Job')

module.exports = { 
    Query:{
        jobs:() => Job.find(),
        job:(_, { id }) => Job.findById(id)
    },

    Mutation:{
        createJobPost:(_, {name, email, company, place, description }) => Job.create({ name, email, company, place, description })
    }
}