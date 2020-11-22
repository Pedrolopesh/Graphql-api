const Job = require('../database/Model/Job')

module.exports = { 
    Query:{
        jobs:() => Job.find(),
        job:(_, { id }) => Job.findById(id)
    },

    Mutation:{
        createJobPost:(_, {name, email, company, place, description }) => Job.create({ name, email, company, place, description }),

        async deleteJobPost (_, {
            id,
        }) {
            const job = await Job.findById(id);
            
            if(!job){
                throw new Error(`Couldn't find post with id ${id}`);
            }else{
                return Job.findByIdAndDelete({_id:id})
            }     
        },

        async updateJobPost (_, {
            id,
            name,
            email,
            company,
            place,
            description,
        }) {
            const job = Job.findById(id);
            
            if(!job){
                throw new Error(`Couldn't find post with id ${id}`);
            }else{
                let obj = {
                    id,
                }
                if(name){obj = Object.assign(obj, {name})}
                if(email){obj = Object.assign(obj, {email})}
                if(company){obj = Object.assign(obj, {company})}
                if(place){obj = Object.assign(obj, {place})}
                if(description){obj = Object.assign(obj, {description})}
            
                return await Job.findOneAndUpdate(obj)
            }     
        },
    }
}