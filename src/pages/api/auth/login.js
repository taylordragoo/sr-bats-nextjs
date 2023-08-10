import { gql } from '@apollo/client';
import client from '../../../lib/shopify';

async function login(email, password) {
    const LOGIN_MUTATION = gql`
      mutation customerAccessTokenCreate($input: CustomerAccessTokenCreateInput!) {
        customerAccessTokenCreate(input: $input) {
          customerAccessToken {
            accessToken
            expiresAt
          }
          userErrors {
            field
            message
          }
        }
      }
    `;

    try {
        const { data } = await client.mutate({
            mutation: LOGIN_MUTATION,
            variables: {
                input: {
                    email: email,
                    password: password,
                },
            },
        });

        if (data.customerAccessTokenCreate.userErrors.length > 0) {
            // handle the errors
            console.error(data.customerAccessTokenCreate.userErrors);
        } else {
            // return the access token
            return data.customerAccessTokenCreate.customerAccessToken;
        }
    } catch (error) {
        console.error('Error logging in', error);
    }
}

export default login;
