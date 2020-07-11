import { QueryResult } from '@aragon/connect-thegraph'

import IssuanceConnectorTheGraph from '../connector'
import Policy, { PolicyData } from '../entities/Policy'

export function parsePolicies(
  result: QueryResult,
  connector: IssuanceConnectorTheGraph
): Policy[] {
  const policies = result.data.issuancePolicies

  if (!policies) {
    throw new Error('Unable to parse policies.')
  }

  return policies.map((data: PolicyData) => {
    return new Policy(data, connector)
  })
}
