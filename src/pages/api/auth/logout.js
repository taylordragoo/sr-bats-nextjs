import { gql } from '@apollo/client';
import client from '../../../lib/shopify';

async function logout(accessToken) {
    const LOGOUT_MUTATION = gql`
      mutation customerAccessTokenDelete($customerAccessToken: String!) {
        customerAccessTokenDelete(customerAccessToken: $customerAccessToken) {
          deletedAccessToken
          deletedCustomerAccessTokenId
          userErrors {
            field
            message
          }
        }
      }
    `;

    try {
        const { data } = await client.mutate({
            mutation: LOGOUT_MUTATION,
            variables: {
                customerAccessToken: accessToken,
            },
        });

        if (data.customerAccessTokenDelete.userErrors.length > 0) {
            // handle the errors
            console.error(data.customerAccessTokenDelete.userErrors);
        } else {
            // The logout was successful, return true
            return true;
        }
    } catch (error) {
        console.error('Error logging out', error);
    }
}

export default logout;
