import { ApolloClient, InMemoryCache } from "@apollo/client";
import { RestLink } from "apollo-link-rest";

const restLink = new RestLink({
  uri: "https://api.spoonacular.com",
  headers: {
    "x-api-key": process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY || "",
  },
});

const client = new ApolloClient({
  link: restLink,
  cache: new InMemoryCache(),
});

export default client;
