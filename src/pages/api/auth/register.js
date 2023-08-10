import { gql } from '@apollo/client';
import client from '../../../lib/shopify';

async function register(firstName, lastName, email, password) {
    const REGISTER_MUTATION = gql`
    mutation customerCreate($input: CustomerCreateInput!) {
      customerCreate(input: $input) {
        customer {
          id
          displayName
          email
        }
        customerUserErrors {
          code
          field
          message
        }
      }
    }
  `;

    try {
        const { data } = await client.mutate({
            mutation: REGISTER_MUTATION,
            variables: {
                input: {
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    password: password,
                },
            },
        });

        if (data.customerCreate.customerUserErrors.length > 0) {
            // handle the errors
            console.error(data.customerCreate.customerUserErrors);
        } else {
            // return the customer data
            return data.customerCreate.customer;
        }
    } catch (error) {
        console.error('Error registering new customer', error);
    }
}

export default register;
