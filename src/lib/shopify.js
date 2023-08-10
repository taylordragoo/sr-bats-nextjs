import {ApolloClient, InMemoryCache} from "@apollo/client";

const client = new ApolloClient({
    uri: 'https://sr-bats-dev.myshopify.com/api/graphql',
    headers: {
        'X-Shopify-Storefront-Access-Token': '8d1225170ceaa9dbf1eede295ed605ae',
    },
    cache: new InMemoryCache(),
});

export default client;
