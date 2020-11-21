# Getting Started with Graphql

# install depencies
npm install at principal diractory

# Start server
npm run dev at principal diractory to run server localhost:4000/

# Query to find all jobs
paste this query on playground graphql to find all job posts:
        query{
            jobs{
                id
                email
                name
                company
                place
                description
            }
        }

# Query to find job id
paste this query on playground graphql to find a job by id:

        query{
            job(id:"id"){
                id
                name
                email
                company
                place
                description
            }
        }

# Query to create job post
paste this query on playground graphql to create a job post:

    mutation{
        createJobPost(
            name:"test name",
            email: "test@test.test"
            company:"Test Company", 
            place:"Test place"
            description:"test description"
        ){
            id
        }
    }