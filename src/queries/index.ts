import gql from 'graphql-tag'

export const ALL_POLICIES = (type: string) => gql`
  ${type} IssuancePolicies($first: Int!, $skip: Int!) {
    issuancePolicies(first: $first, skip: $skip) {
      id
      beneficiary
      blockInflationRate
      active
    }
  }
`
