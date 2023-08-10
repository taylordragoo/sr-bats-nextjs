import { gql } from '@apollo/client';
import client from '../../../lib/shopify';

async function getCustomerInfo(accessToken) {
    if (!accessToken || typeof accessToken !== 'string') {
        console.error('Invalid access token:', accessToken);
        return;
    }

    const CUSTOMER_INFO_QUERY = gql`
      query customer($customerAccessToken: String!) {
        customer(customerAccessToken: $customerAccessToken) {
          id
          displayName
          email
          createdAt
          orders(first: 5) {
            edges {
              node {
                id
                totalPriceV2 {
                  amount
                  currencyCode
                }
                processedAt
                lineItems(first: 5) {
                  edges {
                    node {
                      title
                      quantity
                    }
                  }
                }
              }
            }
          }
        }
      }
    `;

    try {
        const { data } = await client.query({
            query: CUSTOMER_INFO_QUERY,
            variables: {
                customerAccessToken: accessToken,
            },
        });

        // return the customer data
        return data.customer;
    } catch (error) {
        console.error('Error getting customer info', error);
    }
}

export default getCustomerInfo;
