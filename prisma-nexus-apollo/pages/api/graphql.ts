import { ApolloServer } from "apollo-server-micro";

const server = new ApolloServer({})
const handler = server.createHandler({ path: "/api/graphql" })


export const config = {
      api: {
            bodyParser: false
      }
}

export default handler