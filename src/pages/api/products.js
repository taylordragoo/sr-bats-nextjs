import {gql} from "@apollo/client";
import client from "../../lib/shopify";

export function getAllProducts() {
    const getAllProductsQuery = gql`
        {
            products(first: 10) {
                edges {
                    node {
                        id
                        handle
                        title
                        descriptionHtml
                        productType
                        vendor
                        createdAt
                        updatedAt
                        publishedAt
                        onlineStoreUrl
                        images(first: 10) {
                            edges {
                                node {
                                    originalSrc
                                    altText
                                    width
                                    height
                                }
                            }
                        }
                    }
                }
            }
        }
    `;

    try {
        console.log('Getting all products')
        return client.query({
                query: getAllProductsQuery
        });
    } catch (error) {
        throw new Error(error);
    }
}
