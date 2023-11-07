import { gql } from '@apollo/client'

export const GET_PRODUCTS = gql`
  query {
    products {
      id
      description
      reference
      quantity
      unitPrice
    }
  }
`

export const GET_CUSTOMERS = gql`
  query {
    customers {
      id
      socialReason
    }
  }
`
